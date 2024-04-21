require("dotenv").config();
const express = require("express");
require("express-async-errors");
const morgan = require("morgan");
const cors = require("cors");
const { connectingDB } = require("./config/db.connect");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const { VehicleType, VehicleModel } = require("./models/vehicle.modal");
const vehicleRoute = require("./routes/vehicleRoute");
const bookingRoute = require("./routes/bookingRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  return res.send("<h2>Welcome to backend</h2>");
});

app.use("/api/v1/vehicle", vehicleRoute);
app.use("/api/v1/booking", bookingRoute);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 8080;

function start() {
  app.listen(port, async () => {
    try {
      await connectingDB();
      // seedToDB()
    } catch (error) {
      console.log(error);
    }
    console.log(`My port is running on ${port}`);
  });
}
start();
function seedToDB() {
  const vehicleTypesData = [
    { vehicleType: "Cruiser", wheelId: 2 },
    { vehicleType: "Sports", wheelId: 2 },
  ];

  VehicleType.bulkCreate(vehicleTypesData)
    .then((vehicleTypes) => {
      console.log("VehicleTypes created:", vehicleTypes);
    })
    .catch((error) => {
      console.error("Error creating VehicleTypes:", error);
    });
  // const vehicleModelsData = [
  //   { vehicleModel: "Tata Tiago", vehicleTypeId: 1, wheelId: 1 },
  //   { vehicleModel: "Baleno", vehicleTypeId: 1, wheelId: 1 },
  //   { vehicleModel: "Creta", vehicleTypeId: 2, wheelId: 1 },
  //   { vehicleModel: "Thar", vehicleTypeId: 2, wheelId: 1 },
  //   { vehicleModel: "Breeza", vehicleTypeId: 2, wheelId: 1 },
  //   { vehicleModel: "Honda City", vehicleTypeId: 4, wheelId: 1 },
  //   { vehicleModel: "Honda Amaze", vehicleTypeId: 4, wheelId: 1 },
  //   { vehicleModel: "Mercedes S class", vehicleTypeId: 4, wheelId: 1 },
  //   { vehicleModel: "Spreso", vehicleTypeId: 3, wheelId: 1 },
  //   { vehicleModel: "Audi Q", vehicleTypeId: 3, wheelId: 1 },
  // ];
  const vehicleModelsData = [
    { vehicleModel: "KTM T-100", vehicleTypeId: 6, wheelId: 2 },
    { vehicleModel: "Nija Kwashik", vehicleTypeId: 6, wheelId: 2 },
    { vehicleModel: "Bajaj Avenger", vehicleTypeId: 5, wheelId: 2 },
    { vehicleModel: "Harley-Davidson x440", vehicleTypeId: 5, wheelId: 2 },
  ];
  VehicleModel.bulkCreate(vehicleModelsData)
    .then((vehicleModels) => {
      console.log("VehicleModels created:", vehicleModels);
    })
    .catch((error) => {
      console.error("Error creating VehicleModels:", error);
    });
}
