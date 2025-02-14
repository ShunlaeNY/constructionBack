'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teams', [
      {
        name: 'Red Warriors',
        color: 'red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Blue Strikers',
        color: 'blue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Green Guardians',
        color: 'green',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Orange Chargers',
        color: 'orange',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sky Defenders',
        color: 'lightblue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Leaf Rangers',
        color: 'lightgreen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gray Wolves',
        color: 'gray',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Smokey Shadows',
        color: 'whitesmoke',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teams', null, {});
  },
};
