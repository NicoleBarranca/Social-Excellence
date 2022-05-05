const { Schema, model } = require("mongoose");
//must create a reuire variable for formatting dates

const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    /// must match a valid email address (look into Mongoose's matching validation)
  },

  thoughts: {
    // Array of _id values referencing the Thought model
  },

  friends: {
    // Array of _id values referencing the User model (self-reference)
  },
  toJSON: {
    virtuals: true,
  },
  id: false,
});

// Create a virtual called "friendCount"
//that retrieves the length of the user's "friends" array field on query.

const User = model("User", UserSchema);

module.exports = User;
