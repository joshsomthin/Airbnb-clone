"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Homes",
      [
        {
          spotId: 1,
          guest: 4,
          room: 2,
          type: "Bar/Club",
          bed: 3,
          bath: 1,
          latitude: 47.61135091045697,
          longitude: -122.31655979204452,
        },
        {
          spotId: 2,
          guest: 80,
          room: 2,
          type: "Club",
          bed: 0,
          bath: 3,
          latitude: 47.60443044810517,
          longitude: -122.33076567044424,
        },
        {
          spotId: 3,
          guest: 50,
          room: 2,
          type: "Rec-center",
          bed: 0,
          bath: 2,
          latitude: 47.60596260920207,
          longitude: -122.34080525927799,
        },
        {
          spotId: 4,
          guest: 10,
          room: 2,
          type: "House",
          bed: 6,
          bath: 4,
          latitude: 47.60192511869796,
          longitude: -122.3316136979277,
        },
        {
          spotId: 5,
          guest: 500,
          room: 3,
          type: "Frat-house",
          bed: 6,
          bath: 1,
          latitude: 47.608196170727474,
          longitude: -122.34050294154726,
        },
        {
          spotId: 6,
          guest: 1000,
          room: 100,
          type: "Hotel",
          bed: 150,
          bath: 100,
          latitude: faker.address.latitude(),
          longitude: faker.address.longitude(),
        },
        {
          spotId: 7,
          guest: 40,
          room: 4,
          type: "Penthouse",
          bed: 3,
          bath: 3,
          latitude: 47.606880969482496,
          longitude: -122.3339539210074,
        },
        {
          spotId: 8,
          guest: 8,
          room: 2,
          type: "Condo",
          bed: 3,
          bath: 1,
          latitude: 47.610650497879284,
          longitude: -122.34677499178339,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Homes", null, {});
  },
};
