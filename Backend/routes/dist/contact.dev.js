"use strict";

var express = require("express");

var router = new express.Router();

var Contact = require("../models/contactSchema"); //Routing for contact page
//contact page messages


router.route("/contact").post(function _callee(req, res) {
  var name, phone, email, message, sendMessage, created;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          //get body or data
          name = req.body.name;
          phone = req.body.phone;
          email = req.body.email;
          message = req.body.message;
          sendMessage = new Contact({
            name: name,
            phone: phone,
            email: email,
            message: message
          });
          _context.next = 8;
          return regeneratorRuntime.awrap(sendMessage.save());

        case 8:
          created = _context.sent;
          console.log(created);
          res.status(200).send("Message sent");
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          res.status(400).send(_context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
});
module.exports = router;