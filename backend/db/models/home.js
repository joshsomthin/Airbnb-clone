"use strict";
module.exports = (sequelize, DataTypes) => {
  const Home = sequelize.define(
    "Home",
    {
      spotId: DataTypes.INTEGER,
      guest: DataTypes.INTEGER,
      room: DataTypes.INTEGER,
      type: DataTypes.STRING,
      bed: DataTypes.INTEGER,
      bath: DataTypes.INTEGER,
      latitude: DataTypes.DECIMAL,
      longitude: DataTypes.DECIMAL,
    },
    {}
  );
  Home.associate = function (models) {
    Home.belongsTo(models.Spot, { foreignKey: "spotId" });
    Home.hasMany(models.Amenity, { foreignKey: "homeId" });
  };
  return Home;
};
