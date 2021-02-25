"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 1,
          spotId: 1,
          body: faker.lorem.sentence(),
        },
        {
          userId: 2,
          spotId: 1,
          body: faker.lorem.sentence(),
        },
        {
          userId: 3,
          spotId: 1,
          body: faker.lorem.sentence(),
        },
        {
          userId: 4,
          spotId: 1,
          body: faker.lorem.sentence(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
