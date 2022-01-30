const SwimLane = require("../models/swimlane.model");
const Boat = require("../models/boat.model");

exports.get_swimlane_all = async function (req, res, next) {
  const swimLane = await SwimLane.find().populate("list");
  try {
    res.json(swimLane);
  } catch (error) {
    return next(error);
  }
};

exports.get_swimlane = async function (req, res, next) {
  const swimLane = await SwimLane.findById(req.params.id);
  try {
    res.json(swimLane);
  } catch (error) {
    return next(error);
  }
};

// pass all the required params into here
exports.update_swimlane_on_move = async function (req, res, next) {
  // update the list
  const swimLaneSource = await SwimLane.findByIdAndUpdate(req.body.sourceId, {
    list: req.body.sourceItems,
  });
  const swimLaneDest = await SwimLane.findByIdAndUpdate(req.body.destId, {
    list: req.body.destItems,
  });
  // update the boat reference
  const boat = await Boat.findByIdAndUpdate(req.body.boatId, {
    status: req.body.destId,
  });
  try {
    swimLaneSource.save();
    swimLaneDest.save();
    boat.save();
    res.status(200).json({
      message: "Update successful",
    });
  } catch (error) {
    return next(error);
  }
};

exports.update_swimlane = async function (req, res, next) {
  const swimLane = await SwimLane.findByIdAndUpdate(req.params.id, req.body);
  try {
    swimLane.save();
    res.status(200).json({
      message: "Sort successful",
    });
  } catch (error) {
    return next(error);
  }
};

// not implemented in UI
exports.create_swimlane = async function (req, res, next) {
  const swimLane = new SwimLane(req.body);
  try {
    await swimLane.save();
    res.json(swimLane);
  } catch (error) {
    return next(error);
  }
};

// not implemented in UI
exports.delete_swimlane = async function (req, res, next) {
  const swimlLane = await SwimLane.findByIdAndDelete(req.params.id);
  try {
    res.json(swimlLane);
  } catch (error) {
    return next(error);
  }
};
