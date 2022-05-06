const { User, Thought } = require("../models");
const { populate } = require("../models/User");

const userController = {
  getAllUsers(req, res) {
    User.find({})
      .sort({ _id: -1 })
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  addUser({ body }, res) {
    User.create(body)
      .then((userData) => res.json(userData))
      .catch((err) => res.json(err));
  },
};

module.exports = userController;
