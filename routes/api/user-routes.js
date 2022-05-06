const router = require("express").Router();

const { addUser } = require("../../controllers/user-controller");

router.route("/").post(addUser);

module.exports = router;
