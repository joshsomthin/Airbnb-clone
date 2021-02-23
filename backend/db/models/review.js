"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      userId: DataTypes.INTEGER,
      spotId: DataTypes.INTEGER,
      body: DataTypes.TEXT,
    },
    {}
  );
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Spot, { foreignKey: "spotId" });
  };
  return Review;
};
