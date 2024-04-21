const express = require("express");
const router = express.Router();
const {
  createBooking,
  getBookedData,
} = require("../controllers/bookingController");

router.post("/create", createBooking);
router.get("/", getBookedData);

module.exports = router;
