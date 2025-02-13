'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Staffs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      usertypesId: {
        type: Sequelize.INTEGER, //fk
        references: {
          model: 'UserTypes',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      teamId: {
        type: Sequelize.STRING //fk
      },
      email: {
        type: Sequelize.STRING,
        isUnique: true
      },
      password: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      employmentStatus: {
        type: Sequelize.STRING //isEmployed or retired
      },
      workingStatus: {
        type: Sequelize.STRING // available or busy
      },
      position: {
        type: Sequelize.STRING //site manager / architect / craftman
      },
      dob: {
        type: Sequelize.DATE 
      },
      joinedDate: {
        type: Sequelize.DATE 
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
    await queryInterface.dropTable('Staffs');
  }
};