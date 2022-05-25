"use strict";

var express = require('express');

var router = express.Router();

var Customers = require('../models/customer'); //get the cutomer details saved in database


router.route('/customers').get(function (req, res) {
  Customers.find().then(function (customers) {
    return res.json(customers);
  })["catch"](function (err) {
    return res.status(400).json('Error:' + err);
  });
}); //find customer details by id

router.route('/customers/:id').get(function (req, res) {
  Customers.findById(req.params.id).then(function (customer) {
    return res.json(customer);
  })["catch"](function (err) {
    return res.status(400).json('Error:' + err);
  });
}); //update the data by id 

router.route('/update/:id').post(function (req, res) {
  Customers.findById(req.params.id).then(function (customer) {
    customer.customerId = Number(req.body.customerId);
    customer.firstname = req.body.firstname;
    customer.lastname = req.body.lastname;
    customer.balance = Number(req.body.balance);
    customer.email = req.body.email;
    customer.save().then(function () {
      return res.json('cutomer database updated');
    })["catch"](function (err) {
      return res.status(400).json('Error:' + err);
    });
  })["catch"](function (err) {
    return res.status(400).json('Error:' + err);
  });
}); //add customers

router.route('/add').post(function (req, res) {
  var customerId = req.body.customerId;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var balance = req.body.balance;
  var email = req.body.email;
  var newcustomer = new Customers({
    customerId: customerId,
    firstname: firstname,
    lastname: lastname,
    balance: balance,
    email: email
  });
  newcustomer.save().then(function () {
    return res.json('customer added');
  })["catch"](function (err) {
    return res.status(400).json('Error:' + err);
  });
});
module.exports = router;