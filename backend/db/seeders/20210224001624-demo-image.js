"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          spotId: 1,
          imageUrl:
            "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          spotId: 1,
          imageUrl:
            "https://images.pexels.com/photos/2625766/pexels-photo-2625766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          spotId: 1,
          imageUrl: faker.image.nightlife(),
        },
        {
          spotId: 1,
          imageUrl: faker.image.nightlife(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images", null, {});
  },
};
