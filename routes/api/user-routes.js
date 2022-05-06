const router = require("express").Router();

//require every method here
const {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUsers).post(addUser);

router.route("/:id").get(getUserById).put(updateUser);
module.exports = router;
