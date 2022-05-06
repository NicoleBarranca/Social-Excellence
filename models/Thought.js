const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
//must create a reuire variable for formatting dates

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: [1],
      maxlength: [280],
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    // this will be the user that created this thought
    username: {
      type: String,
      required: true,
    },
    // these are like replies
    reactions:
      // Array of nested documents created with the reactionSchema
      [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Create a virtual called "reactionCount"
//that retrieves the length of the thought's "reactions" array field on query.
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
