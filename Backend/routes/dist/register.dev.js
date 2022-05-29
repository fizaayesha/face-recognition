"use strict";

var express = require("express");

var router = new express.Router();

var Register = require("../models/registerSchema"); //Routing for accountholders


router.route("/profile").get(function (req, res) {
  Register.find().then(function (users) {
    return res.json(users);
  })["catch"](function (err) {
    return res.status(400).json("Error:" + err);
  });
});
router.route("/profile/:id").get(function (req, res) {
  Register.findById(req.params.id).then(function (users) {
    return res.json(users);
  })["catch"](function (err) {
    return res.status(400).json("Error:" + err);
  });
});
router.route("/register").post(function _callee(req, res) {
  var name, account, phone, adhaar, email, username, amount, createNewUser, created;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          //get body or data
          name = req.body.name;
          account = req.body.account;
          phone = req.body.phone;
          adhaar = req.body.adhaar;
          email = req.body.email;
          username = req.body.username;
          amount = req.body.amount;
          createNewUser = new Register({
            name: name,
            account: account,
            phone: phone,
            adhaar: adhaar,
            email: email,
            username: username,
            amount: amount
          }); //save method is used to create user or insert user but before saving or inserting

          _context.next = 11;
          return regeneratorRuntime.awrap(createNewUser.save());

        case 11:
          created = _context.sent;
          console.log(created);
          res.status(200).send(created);
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          res.status(400).send(_context.t0);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 16]]);
});
router.route("/register/:id").get(function (req, res) {
  Register.findById(req.params.id).then(function (users) {
    return res.json(users);
  })["catch"](function (err) {
    return res.status(400).json("Error:" + err);
  });
});
router.route("/register/update/:id").post(function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          Register.findById(req.params.id).then(function (user) {
            user.name = req.body.name;
            user.account = req.body.account;
            user.phone = req.body.phone;
            user.adhaar = req.body.adhaar;
            user.email = req.body.email;
            user.username = req.body.username;
            user.amount = req.body.amount;
            user.save().then(function () {
              return res.json("user database updated");
            })["catch"](function (err) {
              return res.status(400).json("Error:" + err);
            });
          })["catch"](function (err) {
            return res.status(400).json("Error:" + err);
          });

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;