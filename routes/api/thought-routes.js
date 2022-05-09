const router = require("express").Router();

//require every method here
const {
  addThought,
  getAllThoughts,
  getThoughtById,
  // updateThought,
  // deleteThought,
  // addReaction,
  // deleteReaction,
} = require("../../controllers/thought-controller");

router.route("/").post(addThought).get(getAllThoughts);

router.route("/:id").get(getThoughtById);

// .put(updateThought).delete(deleteThought)

// router.route("/:id/reactions").post(addReaction).delete(deleteReaction);
module.exports = router;
