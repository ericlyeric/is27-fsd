const mongoose = require("mongoose");
const Boat = require("./boat.model");

const SwimLaneSchema = new mongoose.Schema({
  id: Number,
  name: { type: String, required: true },
  list: [{ type: mongoose.Schema.Types.ObjectId, ref: Boat }],
});

module.exports = mongoose.model("SwimLane", SwimLaneSchema);
