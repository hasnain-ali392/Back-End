const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
  }, 
  age : {
    type : Number,
    required : true,
    max : 2
  },
  email : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true,
    max : 12
  }
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users 