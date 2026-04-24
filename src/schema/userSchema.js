const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50, minlength: 3 },
  age: { type: Number, required: true, min: 16, max: 65 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, maxlength: 12, minlength: 6 },
  createdAt: { type: Date, default: Date.now }
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users 