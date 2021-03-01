"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Homes",
      [
        {
          spotId: 1,
          guest: 200,
          room: 1,
          type: "Bar/Club",
          bed: 0,
          bath: 4,
          latitude: 47.61135091045697,
          longitude: -122.31655979204452,
        },
        {
          spotId: 2,
          guest: 1500,
          room: 2,
          type: "Attraction",
          bed: 0,
          bath: 6,
          latitude: 47.621128217649606,
          longitude: -122.34949197670376,
        },
        {
          spotId: 3,
          guest: 50,
          room: 2,
          type: "Restaurant/Museum",
          bed: 0,
          bath: 2,
          latitude: 47.62069728009514,
          longitude: -122.3504476018005,
        },
        {
          spotId: 4,
          guest: 4,
          room: 1,
          type: "Condo",
          bed: 2,
          bath: 1,
          latitude: 47.608748509541535,
          longitude: -122.3319496935155,
        },
        {
          spotId: 5,
          guest: 10,
          room: 3,
          type: "Hotel Suite",
          bed: 3,
          bath: 2,
          latitude: 47.608182572915894,
          longitude: -122.33372441534077,
        },
        {
          spotId: 6,
          guest: 150,
          room: 0,
          type: "Aquarium",
          bed: 0,
          bath: 4,
          latitude: 47.60792217173664,
          longitude: -122.34307995962486,
        },
        {
          spotId: 7,
          guest: 40,
          room: 0,
          type: "Restaurant",
          bed: 0,
          bath: 2,
          latitude: 47.61590721827868,
          longitude: -122.32286683401533,
        },
        {
          spotId: 8,
          guest: 47943,
          room: 0,
          type: "Stadium",
          bed: 50,
          bath: 0,
          latitude: 47.59249832308288,
          longitude: -122.33119240959851,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Homes", null, {});
  },
};
