"use strict";
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define(
    "Amenity",
    {
      homeId: DataTypes.INTEGER,
      Amenity: DataTypes.STRING,
    },
    {}
  );
  Amenity.associate = function (models) {
    Amenity.belongsTo(models.Home, { foreignKey: "homeId" });
  };
  return Amenity;
};
