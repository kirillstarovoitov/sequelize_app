'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: "Ivan",
        lastName: "Petrov",
        email: "ivan.petrov@test.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        password: "ivan.petrov"
      },
      {
        firstName: "Alex",
        lastName: "Ivanov",
        email: "alex.ivanov@test.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        password: "alex.ivanov"
      },
      {
        firstName: "Jon",
        lastName: "Doe",
        email: "jon.doe@test.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        password: "jon.doe"
      },
      {
        firstName: "Nick",
        lastName: "Cool",
        email: "nick.cool@test.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        password: "nick.cool"
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
