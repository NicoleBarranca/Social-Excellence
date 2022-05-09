const router = require("express").Router();

//require every method here
const {
  addThought,
  getAllThoughts,
  getThoughtById,
} = require("../../controllers/thought-controller");

router.route("/").post(addThought).get(getAllThoughts);

router.route("/:id").get(getThoughtById);

module.exports = router;
