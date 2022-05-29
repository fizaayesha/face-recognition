"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema; //Transaction History Schema

var transactionSchema = new Schema({
  sender: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    "default": Date.now
  }
});
var transaction = mongoose.model("transaction", transactionSchema);
module.exports = transaction;