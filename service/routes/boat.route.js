const router = require("express").Router();
const boat_controller = require("../controllers/boat.controller");

// get all boats, not used in UI
router.get("/all", boat_controller.get_boat_all);

// get a boat, not used in UI
router.get("/:id", boat_controller.get_boat);

// create a boat
router.post("/", boat_controller.create_boat);

// delete a boat
router.delete("/:id", boat_controller.delete_boat);

// update a boat name, not used in UI
router.put("/:id", boat_controller.update_boat);

module.exports = router;
