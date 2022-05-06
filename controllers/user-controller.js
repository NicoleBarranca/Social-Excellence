const { User, Thought } = require("../models");
const { populate } = require("../models/User");

const userController = {
  // GET USERS
  getAllUsers(req, res) {
    User.find({})
      //   .sort({ _id: -1 })
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // CREATE USER
  addUser({ body }, res) {
    User.create(body)
      .then((userData) => res.json(userData))
      .catch((err) => res.json(err));
  },
  // GET USER by ID
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
};

module.exports = userController;
