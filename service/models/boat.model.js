const mongoose = require("mongoose");

const BoatSchema = new mongoose.Schema({
  id: Number,
  name: { type: String, required: true },
  status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SwimLane",
    required: true,
  },
});

module.exports = mongoose.model("Boat", BoatSchema);
