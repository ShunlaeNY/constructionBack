'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Skills', [
      {
         name: 'Foreman / Safety Supervisor',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: 'Scaffolding Supervisor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Scaffolding Skill Upgrade',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Scaffolding Training',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Slinging (<1 Ton Load)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'High Work Vehicle (<10m)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Truck License',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bus License',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
