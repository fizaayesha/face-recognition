"use strict";

var express = require("express");

var router = express.Router();

var TransHist = require("../models/transactions"); //Routing for transactions and transaction history
//get trasactions


router.route("/transactions").get(function (req, res) {
  TransHist.find().then(function (transaction) {
    return res.send(transaction);
  })["catch"](function (err) {
    return res.status(400).json("Error:" + err);
  });
});
router.route("/transactions/:id").get(function (req, res) {
  TransHist.findById(req.params.id).then(function (transaction) {
    return res.json(transaction);
  })["catch"](function (err) {
    return res.status(400).json("Error:" + err);
  });
}); //add trasactions

router.route("/transactions/add").post(function (req, res) {
  var sender = req.body.sender;
  var receiver = req.body.receiver;
  var amount = req.body.amount;
  var date = req.body.date;
  var newtransaction = new TransHist({
    sender: sender,
    receiver: receiver,
    amount: amount,
    date: date
  });
  newtransaction.save().then(function () {
    return res.json("transaction added in history");
  })["catch"](function (err) {
    return res.status(400).json("Error:" + err);
  });
});
module.exports = router;