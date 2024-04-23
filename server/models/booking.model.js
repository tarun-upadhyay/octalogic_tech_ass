const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.connect");
const { Wheel, VehicleModel, VehicleType } = require("./vehicle.modal");

const Booking = sequelize.define(
  "Booking",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicleTypeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicleModelName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicleModelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: VehicleModel,
        key: "id",
      },
    },
    vehicleTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: VehicleType,
        key: "id",
      },
    },
    wheelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Wheel",
        key: "id",
      },
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Booking };
