"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          spotId: 1,
          imageUrl: "fakeimage for sure. first entry in images",
        },
        {
          spotId: 1,
          imageUrl: "fakeimage2 for sure. second entry in images",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images", null, {});
  },
};
