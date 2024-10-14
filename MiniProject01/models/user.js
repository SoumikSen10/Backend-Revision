const mongoose = require("mongoose");

const db_name = "minProjDB";
mongoose.connect(`mongodb://127.0.0.1:27017/${db_name}`);

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  profilePic: {
    type: String,
    default: "default.jpeg",
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
