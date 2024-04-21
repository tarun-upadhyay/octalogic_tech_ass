const { StatusCodes } = require("http-status-codes");
const { Wheel, VehicleType, VehicleModel } = require("../models/vehicle.modal");
const CustomError = require("../errors");
const getWhellerInfo = async (req, res) => {
  let wheels = await Wheel.findAll();
  return res.status(StatusCodes.ACCEPTED).json({ wheels });
};
const getVehicleType = async (req, res) => {
  const { id } = req.params;
  if (!id) throw new CustomError.BadRequestError("wheel id not found");
  let vehicles = await VehicleType.findAll({
    where: {
      wheelId: id,
    },
  });
  return res.status(StatusCodes.ACCEPTED).json({ vehicles });
};
const getVehicleModal = async (req, res) => {
  const { id } = req.params;
  if (!id) throw new CustomError.BadRequestError("wheel id not found");
  let vehiclesModels = await VehicleModel.findAll({
    where: {
      vehicleTypeId: id,
    },
  });
  return res.status(StatusCodes.ACCEPTED).json({ vehiclesModels });
};
module.exports = { getWhellerInfo, getVehicleType, getVehicleModal };
