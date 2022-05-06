const router = require("express").Router();

//require every method here
const {
  getAllUsers,
  //   getUserById,(add to get.())
  addUser,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUsers).post(addUser);

router.route("/:id").get();
module.exports = router;
