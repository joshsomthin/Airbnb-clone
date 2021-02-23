"use strict";
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define(
    "Amenity",
    {
      homeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1, 60],
        },
      },
      Amenity: DataTypes.STRING,
    },
    {}
  );
  Amenity.associate = function (models) {
    Amenity.belongsTo(models.Home, { foreignKey: "homeId" });
  };
  return Amenity;
};
