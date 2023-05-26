'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('todolists', [
      {
        name: 'Yosua',
        password: 'password123',
        email: 'yosua112@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Julian',
        password: 'password234',
        email: 'julaun234h@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Tambahkan data lainnya sesuai kebutuhan
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('todolists', null, {});
  }
};
