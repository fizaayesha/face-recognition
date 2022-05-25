"use strict";

var express = require("express");

var bcryptjs = require("bcryptjs");

var jwt = require("jsonwebtoken");

var router = new express.Router();

var Register = require("../models/registerSchema"); //registrations


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
  var name, account, phone, adhaar, email, username, password, amount, createNewUser, created;
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
          password = req.body.password;
          amount = req.body.amount;
          createNewUser = new Register({
            name: name,
            account: account,
            phone: phone,
            adhaar: adhaar,
            email: email,
            username: username,
            password: password,
            amount: amount
          }); //save method is used to create user or insert user but before saving or inserting, password will hash because of hashing, After hash it willsave to db

          _context.next = 12;
          return regeneratorRuntime.awrap(createNewUser.save());

        case 12:
          created = _context.sent;
          console.log(created);
          res.status(200).send(created);
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          res.status(400).send(_context.t0);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 17]]);
}); // router.route("/register/:id").put(async (req, res) => {
//   Register.findById(req.params.id)
//     .then((user) => {
//       user.name = req.body.name;
//       user.account = req.body.account;
//       user.phone = req.body.phone;
//       user.adhaar = req.body.adhaar;
//       user.email = req.body.email;
//       user.username = req.body.username;
//       user.password = req.body.password;
//       user.amount = req.body.amount;
//       user
//         .save()
//         .then(() => res.json("User's record updated"))
//         .catch((err) => res.status(400).json("Error:" + err));
//     })
//     .catch((err) => res.status(400).json("Error:" + err));
// });

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
            user.password = req.body.password;
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
router.route("/login").post(function _callee3(req, res) {
  var username, password, userExist, isMatch, token;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          //get body or data
          username = req.body.username;
          password = req.body.password; //find user if exist

          _context3.next = 5;
          return regeneratorRuntime.awrap(Register.findOne({
            username: username
          }));

        case 5:
          userExist = _context3.sent;

          if (!userExist) {
            _context3.next = 21;
            break;
          }

          _context3.next = 9;
          return regeneratorRuntime.awrap(bcryptjs.compare(password, userExist.password));

        case 9:
          isMatch = _context3.sent;

          if (!isMatch) {
            _context3.next = 18;
            break;
          }

          _context3.next = 13;
          return regeneratorRuntime.awrap(userExist.generateToken());

        case 13:
          token = _context3.sent;
          res.cookie("jwt", token, {
            //expires token in 24 hours
            expires: new Date(Date.now() + 86400000),
            httpOnly: true
          });
          return _context3.abrupt("return", res.status(200).send("LoggedIn"));

        case 18:
          return _context3.abrupt("return", res.status(400).send("Invalid credentials"));

        case 19:
          _context3.next = 22;
          break;

        case 21:
          return _context3.abrupt("return", res.status(400).send("Invalid credentials"));

        case 22:
          _context3.next = 27;
          break;

        case 24:
          _context3.prev = 24;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(400).send(_context3.t0));

        case 27:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 24]]);
});
router.route("/logout").get(function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          res.clearCookie("jwt", {
            path: "/"
          });
          res.status(200).send("User Logged Out");

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // router.route("/profile/:id").get(async (req, res) => {
//   try {
//     // const name = req.body.name;
//     // const account = req.body.account;
//     // const phone = req.body.phone;
//     // const email = req.body.email;
//     // const adhaar = req.body.adhaar;
//     // const amount = req.body.amount;
//     //find user if exist
//     const userExist = await Register.findById({
//       // name: name,
//       // account: account,
//       // phone: phone,
//       // email: email,
//       // adhaar: adhaar,
//       // amount: amount,
//     });
//     if (userExist) {
//       return res.status(200).send(userExist);
//     } else {
//       return res.status(400).send("Something went wrong");
//     }
//   }
//   catch (err) {
//     return res.status(400).send(err);
//   }
// });
// router.route("/profile").get(async (req, res) => {
//   try {
//     // const name = req.body.name;
//     // const account = req.body.account;
//     // const phone = req.body.phone;
//     // const email = req.body.email;
//     // const adhaar = req.body.adhaar;
//     // const amount = req.body.amount;
//     //find user if exist
//     const userExist = await Register.find({
//       // name: name,
//       // account: account,
//       // phone: phone,
//       // email: email,
//       // adhaar: adhaar,
//       // amount: amount,
//     });
//     if (userExist) {
//       return res.status(200).send(userExist);
//     } else {
//       return res.status(400).send("Something went wrong");
//     }
//   }
//   catch (err) {
//     return res.status(400).send(err);
//   }
// });

module.exports = router;