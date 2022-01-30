require("dotenv").config();
const mongoose = require("mongoose");

exports.connectToDb = async function () {
  await mongoose
    .connect(process.env.MONGODB_CLOUD)
    .then(() => {
      console.log("Connected to database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. \n${err}`);
    });
};
