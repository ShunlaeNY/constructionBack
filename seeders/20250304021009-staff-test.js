"use strict";
const bcrypt = require("bcryptjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Staffs", [
      {
        name: "Kyle",
        image: "kyle.jpg",
        email: "kyle@gmail.com",
        password: await bcrypt.hash("kyle123", 10),
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
        name: "Sam",
        image: "sam.jpg",
        email: "sam@gmail.com",
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
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
