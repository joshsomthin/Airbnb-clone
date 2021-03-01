"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Spots", [
      {
        userId: 1,
        body: "Rhein Haus",
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        body: "Welcome to my crib",
        price: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        body: "Welcome to my beautiful vacation stay",
        price: 750,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        body: faker.lorem.sentence(),
        price: parseInt(faker.commerce.price()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        body: faker.lorem.sentence(),
        price: parseInt(faker.commerce.price()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        body: faker.lorem.sentence(),
        price: parseInt(faker.commerce.price()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        body: faker.lorem.sentence(),
        price: parseInt(faker.commerce.price()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        body: faker.lorem.sentence(),
        price: parseInt(faker.commerce.price()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Spots", {});
  },
};
