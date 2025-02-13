'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 🔹 Ensure 'teamId' is an INTEGER
    await queryInterface.changeColumn('staffs', 'teamId', {
      type: Sequelize.INTEGER,
      allowNull: true, // Change to false if required
    });

    // 🔹 Explicitly add the foreign key constraint
    await queryInterface.addConstraint('staffs', {
      fields: ['teamId'],
      type: 'foreign key',
      references: {
        table: 'teams', // Ensure this matches your actual table name
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    // 🔹 Remove the foreign key constraint if rolling back
    await queryInterface.removeConstraint('staffs', 'staffs_teamId_fkey');

    // 🔹 Revert 'teamId' to its previous state
    await queryInterface.changeColumn('staffs', 'teamId', {
      type: Sequelize.INTEGER,
      allowNull: true, // Adjust based on original schema
    });
  }
};
