"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Staffs", [
      {
        name: "John Doe",
        image: "john_doe.jpg",
        email: "johndoe@example.com",
        password: await bcrypt.hash("password123", 10),
        address: "123 Main St, Cityville",
        phoneNumber: "123-456-7890",
        employmentStatus: "Retired",
        workingStatus: "Active",
        position: "Manager",
        dob: new Date("1990-01-15"),
        joinedDate: new Date("2020-06-01"),
        usertypesId: 1,
        teamId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Smith",
        image: "jane_smith.jpg",
        email: "janesmith@example.com",
        password: await bcrypt.hash("securepass456", 10),
        address: "456 Elm St, Townsville",
        phoneNumber: "987-654-3210",
        employmentStatus: "Employed",
        workingStatus: "Inactive",
        position: "Technician",
        dob: new Date("1985-05-20"),
        joinedDate: new Date("2019-09-15"),
        usertypesId: 2,
        teamId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Staffs", null, {});
  },
};
