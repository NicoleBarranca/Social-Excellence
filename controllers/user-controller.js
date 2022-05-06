const { User, Thought } = require("../models");

const userController = {
  addUser({ body }, res) {
    User.create(body)
      .then((userData) => res.json(userData))
      .catch((err) => res.json(err));
  },
};

module.exports = userController;
