'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Staffs", "accesstoken", {
      type: Sequelize.STRING,
      after: "joinedDate",
    });

    await queryInterface.addColumn("Staffs", "refreshtoken", {
      type: Sequelize.STRING,
      after: "accesstoken",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Staffs", "refreshtoken");
    await queryInterface.removeColumn("Staffs", "accesstoken");
  },
};
