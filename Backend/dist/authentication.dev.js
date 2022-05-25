"use strict";

//Authenticate the middle ware.
//It will checked before the response
var Users = require("./models/registerSchema");

var authenticate = function authenticate(req, res) {
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

          res.status(401).send("No token");
          _context.next = 11;
          break;

        case 6:
          verifyToken = jwt.verify(token, process.env.SECRET_KEY);
          _context.next = 9;
          return regeneratorRuntime.awrap(Users.findOne({
            _id: verifyToken._id,
            "tokens.token": token
          }));

        case 9:
          rootUser = _context.sent;

          if (!rootUser) {
            res.status(401).send("User Not Found");
          } else {
            res.status(200).send("Authorized User");
          }

        case 11:
          next();
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          res.status(401).send("Error");
          console.log(_context.t0);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
};