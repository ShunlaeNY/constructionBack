"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "SiteOperationtypes",
      [
        {
          requiredStaff: 5,
          requiredVehicle: 2,
          workinghourStart: 8,
          workinghourEnd: 18,
          siteId: 1,
          operationtypesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          requiredStaff: 3,
          requiredVehicle: 1,
          workinghourStart: 9,
          workinghourEnd: 17,
          siteId: 2,
          operationtypesId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("SiteOperationtypes", null, {});
  },
};
