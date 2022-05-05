const { Schema, model } = require("mongoose");
//must create a reuire variable for formatting dates

// SCHEMA ONLY

const ReactionSchema = new Schema({
  reactionId: {
    //https://mongoosejs.com/docs/schematypes.html#objectids
    //Use Mongoose's ObjectId data type
    // Default value is set to a new ObjectId
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
    // get: <<<< Use a getter method to format the timestamp on query
  },
});

//This will not be a model, but rather will be used as
// the reaction field's subdocument schema in the Thought model.

// CHECK IF BELOW CODE IS NEEDED

// const Reaction = model("Reaction", ThoughtSchema);
// module.exports = Reaction;
