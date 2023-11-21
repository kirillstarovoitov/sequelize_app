const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize(dbConfig.db_name, dbConfig.db_user, dbConfig.db_password, {
  dialect: dbConfig.dbDriver,
  host: dbConfig.db_host,
  port: dbConfig.db_port,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.js")(sequelize, Sequelize);
db.roles = require("./role.js")(sequelize, Sequelize);
db.userRoles = require("./userrole.js")(sequelize, Sequelize);


db.users.belongsToMany(db.roles, { foreignKey: 'userId', through: 'UserRole' });
db.roles.belongsToMany(db.users, { foreignKey: 'roleId', through: 'UserRole' });

module.exports = db;
