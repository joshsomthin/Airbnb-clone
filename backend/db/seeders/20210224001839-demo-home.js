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
          type: "Motel",
          bed: 3,
          bath: 1,
          latitude: 47.373348,
          longitude: -122.036926,
        },
        {
          spotId: 1,
          guest: 80,
          room: 2,
          type: "Club",
          bed: 0,
          bath: 3,
          latitude: faker.address.latitude(),
          longitude: faker.address.longitude(),
        },
        {
          spotId: 1,
          guest: 50,
          room: 2,
          type: "Rec-center",
          bed: 0,
          bath: 2,
          latitude: faker.address.latitude(),
          longitude: faker.address.longitude(),
        },
        {
          spotId: 1,
          guest: 10,
          room: 2,
          type: "House",
          bed: 6,
          bath: 4,
          latitude: faker.address.latitude(),
          longitude: faker.address.longitude(),
        },
        {
          spotId: 1,
          guest: 500,
          room: 3,
          type: "Frat-house",
          bed: 6,
          bath: 1,
          latitude: faker.address.latitude(),
          longitude: faker.address.longitude(),
        },
        {
          spotId: 1,
          guest: 1000,
          room: 100,
          type: "Hotel",
          bed: 150,
          bath: 100,
          latitude: faker.address.latitude(),
          longitude: faker.address.longitude(),
        },
        {
          spotId: 1,
          guest: 40,
          room: 4,
          type: "Penthouse",
          bed: 3,
          bath: 3,
          latitude: faker.address.latitude(),
          longitude: faker.address.longitude(),
        },
        {
          spotId: 1,
          guest: 8,
          room: 2,
          type: "Condo",
          bed: 3,
          bath: 1,
          latitude: faker.address.latitude(),
          longitude: faker.address.longitude(),
        },
        {
          spotId: 1,
          guest: 8,
          room: 2,
          type: "Apartment",
          bed: 1,
          bath: 1,
          latitude: faker.address.latitude(),
          longitude: faker.address.longitude(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Homes", null, {});
  },
};
