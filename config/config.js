module.exports=  {
  development: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB_NAME,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: process.env.DB_DRIVER,
    seederStorage: 'sequelize'
  },
  test: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB_NAME,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: process.env.DB_DRIVER,
    seederStorage: 'sequelize'
  },
  production: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB_NAME,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: process.env.DB_DRIVER,
    seederStorage: 'sequelize'
  }
}
