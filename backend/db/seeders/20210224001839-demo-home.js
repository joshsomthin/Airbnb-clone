"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Homes",
      [
        {
          spotId: 1,
          guest: 4,
          room: 2,
          type: "Motel",
          bed: 3,
          bath: 1,
          latitude: 47.373348,
          longitude: -122.036926,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Homes", null, {});
  },
};
