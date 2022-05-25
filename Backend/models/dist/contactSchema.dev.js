"use strict";

var mongoose = require("mongoose"); //Contact Schema


var contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    minlength: 10,
    maxlength: 10,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}); //CREATE MODEL

var Contacts = new mongoose.model("Contact", contactSchema);
module.exports = Contacts;