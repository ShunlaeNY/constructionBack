"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Vehicles", [
      {
        name: "Toyota Corolla",
        image: "toyota_corolla.jpg",
        status: "Active",
        inspectionExpiry: new Date("2026-05-20"),
        insuranceExpiry: new Date("2026-12-15"),
        groupId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Honda Civic",
        image: "honda_civic.jpg",
        status: "Inactive",
        inspectionExpiry: new Date("2025-09-10"),
        insuranceExpiry: new Date("2025-11-22"),
        groupId: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ford Mustang",
        image: "ford_mustang.jpg",
        status: "Active",
        inspectionExpiry: new Date("2027-03-30"),
        insuranceExpiry: new Date("2027-08-18"),
        groupId: 3, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Vehicles", null, {});
  },
};
