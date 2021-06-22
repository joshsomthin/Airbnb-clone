"use strict";
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define(
    "Spot",
    {
      userId: DataTypes.INTEGER,
      body: DataTypes.TEXT,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
    },
    {}
  );
  Spot.associate = function (models) {
    Spot.belongsTo(models.User, { foreignKey: "userId" });
    Spot.hasMany(models.Booking, { foreignKey: "spotId" });
    Spot.hasMany(models.Review, { foreignKey: "spotId" });
    Spot.hasMany(models.Image, { foreignKey: "spotId" });
    Spot.hasOne(models.Home, { foreignKey: "spotId" });
  };
  return Spot;
};
