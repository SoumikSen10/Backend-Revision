const mongoose = require("mongoose");
const db_name = "mongoPractice";
mongoose.connect(`mongodb://127.0.0.1:27017/${db_name}`);

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});

module.exports = mongoose.model("user", userSchema);
