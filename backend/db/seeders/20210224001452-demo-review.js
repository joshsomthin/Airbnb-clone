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
          body:
            "Had a great time with my friends partying here! Will definitely be back soon!",
        },
        {
          userId: 2,
          spotId: 1,
          body: "They got bars and bocce!?! What's not to love?",
        },
        {
          userId: 3,
          spotId: 1,
          body:
            "Can't remember much of what happend that night. Would come back 10/10",
        },
        {
          userId: 4,
          spotId: 1,
          body: "Got barfed on ಠ_ಠ. Music was good though.",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
