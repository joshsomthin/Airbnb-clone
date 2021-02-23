"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Spots", [
      {
        userId: 1,
        body: "Welcome to my beautiful home",
        price: 145,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        body: "Welcome to my crib",
        price: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        body: "Welcome to my beautiful vacation stay",
        price: 750,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Spots", {});
  },
};
