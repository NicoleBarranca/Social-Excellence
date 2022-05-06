const { Schema, model } = require("mongoose");
//Variable for formatting dates
const dateFormat = require("../utils/dateFormat");

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
    match: [/.+\@.+\..+/, "Please use a valid email address"],
  },

  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  toJSON: {
    virtuals: true,
  },
  id: false,
});

// Virtual
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
