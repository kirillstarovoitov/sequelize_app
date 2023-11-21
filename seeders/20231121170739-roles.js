'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Roles", [
      {
        name: "admin",
        isProtected: true,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: "user",
        isProtected: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "moderator",
        isProtected: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
