const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = require("./User");

const PostSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("Post", PostSchema);
