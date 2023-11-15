const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: String,
  password: String,
});

const Users = model("user", userSchema);

module.exports = Users;
