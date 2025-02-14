"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Sites",
      [
        {
          name: "Main Office Site",
          address: "789 Main St, NY",
          status: "Under Construction",
          startDate: new Date("2024-01-01"),
          endDate: new Date("2025-01-01"),
          businesspartnerId: 1,
          staffId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sub Office Site",
          address: "101 Sub St, CA",
          status: "Before Construction",
          startDate: new Date("2023-06-01"),
          endDate: new Date("2024-06-01"),
          businesspartnerId: 2,
          staffId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Sites", null, {});
  },
};
