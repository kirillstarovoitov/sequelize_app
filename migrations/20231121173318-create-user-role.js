'use strict';
const models = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserRoles', {
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users", key: "id"
        }
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Roles", key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserRoles');
  }
};