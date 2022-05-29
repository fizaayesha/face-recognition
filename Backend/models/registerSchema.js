const mongoose = require("mongoose");

//Schema for accountholders
const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  account: {
    type: Number,
    minlength: 9,
    maxlength: 18,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    minlength: 10,
    maxlength: 10,
    required: true,
  },
  adhaar: {
    type: Number,
    minlength: 12,
    maxlength: 12,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  amount: {
    type: Number,
    required: true,
  },
});

//CREATE MODEL
const Registrations = new mongoose.model("Registration", registerSchema);
module.exports = Registrations;
