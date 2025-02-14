"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("StaffSkills", [
      {
        staffId: 1,
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        staffId: 1,
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        staffId: 2,
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("StaffSkills", null, {});
  },
};
