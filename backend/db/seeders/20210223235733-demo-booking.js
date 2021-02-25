"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Bookings", [
      {
        spotId: 1,
        userId: 1,
        body: "I'm very excited to stay in your lovely house.",
        price: 500,
        startDate: new Date(2021, 2, 24),
        endDate: new Date(2021, 2, 26),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 2,
        userId: 1,
        body: "I'm very excited to stay in your lovely house.",
        price: 650,
        startDate: new Date(2021, 2, 1),
        endDate: new Date(2021, 2, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 3,
        userId: 1,
        body: "I'm very excited to stay in your lovely house.",
        price: 650,
        startDate: new Date(2021, 2, 1),
        endDate: new Date(2021, 2, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 4,
        userId: 1,
        body: "I'm very excited to stay in your lovely house.",
        price: 650,
        startDate: new Date(2021, 2, 1),
        endDate: new Date(2021, 2, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 5,
        userId: 1,
        body: "I'm very excited to stay in your lovely house.",
        price: 650,
        startDate: new Date(2021, 2, 1),
        endDate: new Date(2021, 2, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 6,
        userId: 1,
        body: "I'm very excited to stay in your lovely house.",
        price: 650,
        startDate: new Date(2021, 2, 1),
        endDate: new Date(2021, 2, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 7,
        userId: 1,
        body: "I'm very excited to stay in your lovely house.",
        price: 650,
        startDate: new Date(2021, 2, 1),
        endDate: new Date(2021, 2, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 8,
        userId: 1,
        body: "I'm very excited to stay in your lovely house.",
        price: 650,
        startDate: new Date(2021, 2, 1),
        endDate: new Date(2021, 2, 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Bookings", {});
  },
};
