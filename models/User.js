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
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
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

// Create a virtual called "friendCount"
//that retrieves the length of the user's "friends" array field on query.
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
