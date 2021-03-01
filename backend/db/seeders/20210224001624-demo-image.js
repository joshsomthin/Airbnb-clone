"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          spotId: 1,
          imageUrl: "https://eventective-media.azureedge.net/2007315_lg.jpg",
        },
        {
          spotId: 1,
          imageUrl:
            "https://uploads.visitseattle.org/2018/03/01012353/Rhein-Haus-Bocce-Court-Clock-View_631e5652-5056-a36a-08a74121c8d1c065.jpg",
        },
        {
          spotId: 1,
          imageUrl:
            "https://media-cdn.tripadvisor.com/media/photo-s/10/b7/6c/71/the-rhein-haus-seattle.jpg",
        },
        {
          spotId: 1,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruYSLRw9cZtp4dIssrw9b3TnX5Yx6AngvNQ&usqp=CAU",
        },
        {
          spotId: 2,
          imageUrl: faker.image.nightlife(),
        },
        {
          spotId: 3,
          imageUrl: faker.image.nightlife(),
        },
        {
          spotId: 4,
          imageUrl: faker.image.nightlife(),
        },
        {
          spotId: 5,
          imageUrl: faker.image.nightlife(),
        },
        {
          spotId: 6,
          imageUrl: faker.image.nightlife(),
        },
        {
          spotId: 7,
          imageUrl: faker.image.nightlife(),
        },
        {
          spotId: 8,
          imageUrl: faker.image.nightlife(),
        },
        {
          spotId: 8,
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
