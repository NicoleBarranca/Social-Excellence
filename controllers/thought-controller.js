const { Thought, User } = require("../models");

const thoughtController = {
  //CREATE NEW THOUGHT
  addThought({ params, body }, res) {
    console.log(params);
    Thought.create(body)
      .then(({ _id }) => {
        // pushing new thought to the array of thoughts for a user
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: req.params.thoughtId } },
          { new: true }
        );
      })
      .then((thoughtData) => {
        console.log(thoughtData);
        if (!thoughtData) {
          res.status(404).json({
            message: "This user ID does not exist. Please try again!",
          });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => res.json(err));
  },
  // (don't forget to push the created thought's _id to the
  //associated user's thoughts array field) --- do similar to user friend!

  // GET ALL THOUGHTS
  getAllThoughts(req, res) {
    Thought.find({})
      .then((thoughtData) => res.json(thoughtData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  //GET SINGLE THOUGHT BY ID
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .populate({
        path: "users",
        select: "-__v",
      })
      .select("-__v")
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },

  //PUT - UPDATE A THOUGHT BY ID
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({
            message: "This thought does not exist. Please try a different ID.",
          });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => res.json(err));
    console.log(err);
  },
  // DELETE A THOUGHT BY ITS ID

  // POST to create a reaction stored in a single thought's reactions array field
  // DELETE to pull and remove a reaction by the reaction's reactionId value
  // use push and pull
};

module.exports = thoughtController;
