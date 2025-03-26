"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("SiteOperationtypes", "startDate", {
      type: Sequelize.DATE,
      after: "operationtypesId",
    });
    await queryInterface.addColumn("SiteOperationtypes", "endDate", {
      type: Sequelize.DATE,
      after: "startDate",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("SiteOperationtypes", "startDate");
    await queryInterface.removeColumn("SiteOperationtypes", "endDate");
  },
};
