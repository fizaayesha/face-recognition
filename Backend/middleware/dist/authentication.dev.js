"use strict";

//Authenticate the middle ware.
//It will checked before the response
var Users = require("../models/registerSchema");

var jwt = require("jsonwebtoken");

var authenticate = function authenticate(req, res, next) {
  var token, verifyToken, rootUser;
  return regeneratorRuntime.async(function authenticate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          //Get the cookies
          token = req.cookies.jwt;

          if (token) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(401).send("No token"));

        case 6:
          verifyToken = jwt.verify(token, process.env.SECRET_KEY);
          _context.next = 9;
          return regeneratorRuntime.awrap(Users.findOne({
            _id: verifyToken._id,
            "tokens.token": token
          }));

        case 9:
          rootUser = _context.sent;

          if (rootUser) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", res.status(401).send("User Not Found"));

        case 14:
          return _context.abrupt("return", res.status(200).send("Authorized User"));

        case 15:
          next();
          _context.next = 22;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(401).send("Error"));

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 18]]);
};

module.exports = authenticate;