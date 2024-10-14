const mongoose = require("mongoose");

const db_name = "userDB";

mongoose.connect(`mongodb://127.0.0.1:27017/${db_name}`);

const userSchema = mongoose.Schema({
  image: String,
  email: String,
  name: String,
});

module.exports = mongoose.model("user", userSchema);
