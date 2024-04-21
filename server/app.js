require("dotenv").config();
const express = require("express");
require("express-async-errors");
const morgan = require("morgan");
const cors = require("cors");
const { connectingDB } = require("./config/db.connect");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const app = express();
app.use(cors());
app.use(express.json());

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  return res.send("<h2>Welcome to backend</h2>");
});


app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 8080;

function start() {
  app.listen(port, async () => {
    try {
      await connectingDB();
    } catch (error) {
      console.log(error);
    }
    console.log(`My port is running on ${port}`);
  });
}
start();
