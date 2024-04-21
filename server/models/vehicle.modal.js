const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.connect");

const Vehicle = sequelize.define(
  "vehicle",
  {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wheels: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Vehicle;
