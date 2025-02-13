'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SiteOperationtypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      siteid:{
        type: Sequelize.INTEGER,
        references: {
          model: 'sites',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      operationtypesId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'operationtypes',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      requiredStaff: {
        type: Sequelize.INTEGER
      },
      requiredVehicle: {
        type: Sequelize.INTEGER
      },
      workinghourStart: {
        type: Sequelize.INTEGER
      },
      workinghourEnd: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('SiteOperationtypes');
  }
};