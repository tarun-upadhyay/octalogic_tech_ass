const express = require("express");
const router = express.Router();
const {
  createBooking,
  getBookedData,
  deleteBooking,
} = require("../controllers/bookingController");

router.post("/create", createBooking);
router.get("/", getBookedData);
router.delete("/delete/:id", deleteBooking);

module.exports = router;
