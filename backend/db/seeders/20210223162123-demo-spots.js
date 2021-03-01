"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Spots", [
      {
        userId: 1,
        body: "Rhein Haus",
        price: 4000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        body: "Space Needle",
        price: 12500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        body: "Welcome to the beautiful chihuly garden",
        price: 7000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        body: "Charming loft near Pike Place",
        price: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        body: "Modern hotel suite",
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        body: "Enchanting Seattle Aquarium",
        price: 4000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        body: "Classic bar in the heart of downtown",
        price: 1500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        body: "Entire T-Mobile Park Stadium!!!",
        price: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Spots", {});
  },
};
