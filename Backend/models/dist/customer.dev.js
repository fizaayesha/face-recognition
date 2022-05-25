"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var customerSchema = new Schema({
  customerId: {
    type: Number,
    required: true,
    unique: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});
var customer = mongoose.model('customer', customerSchema);
module.exports = customer;