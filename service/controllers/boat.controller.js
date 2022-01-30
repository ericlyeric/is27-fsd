const Boat = require("../models/boat.model");
const SwimLane = require("../models/swimlane.model");

exports.get_boat = async function (req, res, next) {
  const boat = await Boat.findById(req.params.id);
  try {
    res.status(200).json(boat);
  } catch (error) {
    return next(error);
  }
};

// a new boat is added to the 'docked' list
exports.create_boat = async function (req, res, next) {
  try {
    // check if Docked swimlane exists
    const checkSwimLane = await SwimLane.findOne({ name: "Docked" });
    if (!checkSwimLane) throw new Error("Docked swim lane does not exist");
    // check if boat name already exists
    const checkBoatName = await Boat.exists({ name: req.body.name });
    if (checkBoatName) throw new Error(`${req.body.name} already exists`);
    const boat = new Boat({ name: req.body.name, status: checkSwimLane._id });
    await boat.save();
    // update swimLane
    checkSwimLane.list.push(boat);
    await checkSwimLane.save();
    res.status(201).json({
      message: `${req.body.name} created successfully`,
      data: boat,
    });
  } catch (error) {
    // write a handler for errors
    return next(error);
  }
};

exports.delete_boat = async function (req, res, next) {
  const boat = await Boat.findByIdAndDelete(req.params.id);
  try {
    // we know what lane the boat is in
    const checkSwimLane = await SwimLane.findById(boat.status);
    // remove the reference from the swim lane
    checkSwimLane.list.pull(boat);
    res.status(200).json({
      message: `${boat.name} deleted successfully`,
      id: boat._id,
      swimLane: boat.status,
    });
  } catch (error) {
    return next(error);
  }
};

exports.update_boat = async function (req, res, next) {
  // can only update the name
  const boat = await Boat.findByIdAndUpdate(req.params.id, req.body);
  try {
    res.json(boat);
  } catch (error) {
    return next(error);
  }
};

// not used in UI
exports.get_boat_all = async function (req, res, next) {
  const boat = await Boat.find();
  try {
    res.json(boat);
  } catch (error) {
    return next(error);
  }
};
