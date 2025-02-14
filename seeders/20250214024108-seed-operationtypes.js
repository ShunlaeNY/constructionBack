'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Operationtypes', [
      {
        name: 'Inspection',
        color: 'red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Maintenance',
        color: 'blue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Repair',
        color: 'green',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Upgrade',
        color: 'orange',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Installation',
        color: 'lightblue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Audit',
        color: 'lightgreen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Emergency',
        color: 'gray',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Routine Check',
        color: 'whitesmoke',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Operationtypes', null, {});
  },
};
