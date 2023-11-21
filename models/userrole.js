'use strict';
const models = require("./index")

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define("UserRole", {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: models.users, key: "id"
      }
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: models.roles, key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'UserRole',
  });


  return UserRole;
};