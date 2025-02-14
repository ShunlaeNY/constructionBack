"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Businesspartners",
      [
        {
          name: "ABC Corp",
          image: "abc_logo.png",
          email: "contact@abc.com",
          address: "123 Business St, NY",
          phonenumber: "1234567890",
          staffId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "XYZ Ltd",
          image: "xyz_logo.png",
          email: "info@xyz.com",
          address: "456 Market Ave, CA",
          phonenumber: "0987654321",
          staffId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Businesspartners", null, {});
  },
};
