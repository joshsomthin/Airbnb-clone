"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Spots", [
      {
        userId: 1,
        body: "Rhein Haus",
        description: 'German biergarten with bratwurst, pretzels & schnitzels, plus fireplaces & bocce ball courts.',
        price: 4000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        body: "Space Needle",
        description: 'Iconic, 605-ft.-tall spire at the Seattle Center, with an observation deck & a rotating restaurant.',
        price: 12500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        body: "Welcome to the beautiful chihuly garden",
        description: 'Chihuly Garden and Glass is an exhibit in the Seattle Center showcasing the studio glass of Dale Chihuly.',
        price: 7000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        body: "Charming loft near Pike Place",
        description: 'Small quaint event space near the historical Pike Place market near the water in Downtown Seattle.',
        price: 80,       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        body: "Modern hotel suite",
        description: 'Modern Luxuries featured in this upscale hotel near the event center in downtown Seattle.',
        price: 20,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        body: "Enchanting Seattle Aquarium",
        description: 'Get lost in the beauty of marine wildlife in this magical event space. Great for parties and graduation events.',
        price: 4000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        body: "Classic bar in the heart of downtown",
        description: 'Chic bar near the bustling nightlife located on Capitol Hill, start your night here with good drinks and converstion with friends.',
        price: 1500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        body: "Entire T-Mobile Park Stadium!!!",
        description: 'Stunning. Gorgeous views of the Seattle sound from the top rows, and enough space to hold a concert.',
        price: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Spots", {});
  },
};
