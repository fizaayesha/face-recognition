"use strict";

var express = require("express");

var router = new express.Router();

var Login = require("../models/registerSchema"); //registrations


router.route("/login").post(function _callee(req, res) {
  var username, password, userExist, isMatch, token;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          //get body or data
          username = req.body.username;
          password = req.body.password; //find user if exist

          _context.next = 5;
          return regeneratorRuntime.awrap(Login.findOne({
            username: username
          }));

        case 5:
          userExist = _context.sent;

          if (!userExist) {
            _context.next = 21;
            break;
          }

          _context.next = 9;
          return regeneratorRuntime.awrap(bcryptjs.compare(password, userExist.password));

        case 9:
          isMatch = _context.sent;

          if (!isMatch) {
            _context.next = 18;
            break;
          }

          _context.next = 13;
          return regeneratorRuntime.awrap(userExist.generateToken());

        case 13:
          token = _context.sent;
          res.cookie("jwt", token, {
            //expires token in 24 hours
            expires: new Date(Date.now() + 86400000),
            httpOnly: true
          });
          res.status(200).send("LoggedIn");
          _context.next = 19;
          break;

        case 18:
          res.status(400).send("Invalid credentials");

        case 19:
          _context.next = 22;
          break;

        case 21:
          res.status(400).send("Invalid credentials");

        case 22:
          _context.next = 27;
          break;

        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](0);
          res.status(400).send(_context.t0);

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 24]]);
});
module.exports = router;