const { Schema } = require("mongoose");
//must create a reuire variable for formatting dates

// SCHEMA ONLY

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: [280],
    },
    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

//This will not be a model, but rather will be used as
// the reaction field's subdocument schema in the Thought model.

module.exports = reactionSchema;
