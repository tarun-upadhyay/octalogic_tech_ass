const { StatusCodes } = require("http-status-codes");
const { Booking } = require("../models/booking.model");
const CustomError = require("../errors");
const { Wheel, VehicleModel, VehicleType } = require("../models/vehicle.modal");
const createBooking = async (req, res) => {
  const {
    firstName,
    lastName,
    vehicleModel,
    vehicleType,
    wheels,
    startDate,
    endDate,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !vehicleModel ||
    !vehicleType ||
    !wheels ||
    !startDate ||
    !endDate
  ) {
    throw new CustomError.BadRequestError(
      "Please provide all fields like FirstName, lastName, vehicleType, wheels, startDate, endDate"
    );
  }

  const bookingExists = await Booking.findOne({
    where: {
      firstName: firstName,
      lastName: lastName,
      vehicleTypeId: vehicleType,
      vehicleModelId: vehicleModel,
    },
  });

  if (bookingExists) {
    return res.status(400).json({ msg: "User already booked!!" });
  }

  try {
    const newBooking = await Booking.create({
      firstName,
      lastName,
      vehicleModelId: vehicleModel,
      vehicleTypeId: vehicleType,
      wheelId: wheels,
      startDate,
      endDate,
    });

    console.log("Booking created:", newBooking);
    res
      .status(201)
      .json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Failed to create booking" });
  }
};

const getBookedData = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
};

module.exports = { createBooking, getBookedData };
