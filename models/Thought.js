const { Schema, model } = require("mongoose");
//must create a reuire variable for formatting dates

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: [1],
    maxlength: [280],
  },

  createdAt: {
    type: Date,
    default: Date.now,
    // get: <<<< Use a getter method to format the timestamp on query
  },
  // this will be the user that created this thought
  username: {
    type: String,
    required: true,
  },
  // these are like replies
  reactions: {
    // Array of nested documents created with the reactionSchema
  },
});

// Create a virtual called "reactionCount"
//that retrieves the length of the thought's "reactions" array field on query.

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
