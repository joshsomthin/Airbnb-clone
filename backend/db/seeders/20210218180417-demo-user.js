"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          firstName: "Demo",
          lastName: "user",
          profilePic:
            "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&h=661&q=70&fm=webp",
          hashedPassword: bcrypt.hashSync("password"),
        },
        // {
        //   email: faker.internet.email(),
        //   username: "FakeUser1",
        //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
        // },
        // {
        //   email: faker.internet.email(),
        //   username: "FakeUser2",
        //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
        // },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
      },
      {}
    );
  },
};
