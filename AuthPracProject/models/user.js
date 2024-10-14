const mongoose = require("mongoose");

const dbname = "userAuthDB";

mongoose.connect(`mongodb://127.0.0.1:27017/${dbname}`);

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
});

module.exports = mongoose.model("user", userSchema);
