const router = require("express").Router();
const swimlane_controller = require("../controllers/swimlane.controller");

// get all lanes
router.get("/", swimlane_controller.get_swimlane_all);

// get a lane
router.get("/:id", swimlane_controller.get_swimlane);

// create a lane
router.post("/", swimlane_controller.create_swimlane);

// delete a lane
router.delete("/:id", swimlane_controller.delete_swimlane);

// update the list on movement
router.put("/", swimlane_controller.update_swimlane_on_move);

// update the list of a lane
router.put("/:id", swimlane_controller.update_swimlane);

module.exports = router;
