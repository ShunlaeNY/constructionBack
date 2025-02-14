"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Groups", [
      {
        name: "Group One",
        color: "red",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Group Two",
        color: "blue",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Group Three",
        color: "green",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Group Four",
        color: "orange",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Group Five",
        color: "lightblue",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Group Six",
        color: "lightgreen",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Group Seven",
        color: "gray",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Group Eight",
        color: "whitesmoke",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Guest Group",
        color: "gray",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Groups", null, {});
  },
};
