const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const { connectToDb } = require("./config/connection");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );
  app.use(morgan("dev"));
}

connectToDb();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

// put routes here
const boatRouter = require("./routes/boat.route");
const swimlaneRouter = require("./routes/swimlane.route");

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the FishFry backend!");
});

app.use(`${process.env.BASE_API_URL}/boat`, boatRouter);
app.use(`${process.env.BASE_API_URL}/swimlane`, swimlaneRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../client", "build")));

  app.get("*", (req, res, next) => {
    // Serve index.html file if it doesn't recognize the route
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html")); // <- Here !
  });
}

module.exports = app;
