"use strict";

var mongoose = require("mongoose");

var bcryptjs = require("bcryptjs");

var jwt = require("jsonwebtoken"); //Register Schema


var registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  account: {
    type: Number,
    minlength: 9,
    maxlength: 18,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    minlength: 10,
    maxlength: 10,
    required: true
  },
  adhaar: {
    type: Number,
    minlength: 12,
    maxlength: 12,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  // email: {
  //   type: String,
  //   unique: [true, "Email already exists"],
  //   validate(value) {
  //     if (!validator.isEmail(value)) {
  //       throw new Error("Invalid email");
  //     }
  //   },
  // },
  username: {
    type: String,
    required: true,
    unique: true
  },
  // password: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  amount: {
    type: Number,
    required: true
  } // tokens: [
  //   {
  //     token: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],

}); //Hashing Password to secure

registerSchema.pre("save", function _callee(next) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (this.isModified("password")) {
            this.password = bcryptjs.hashSync(this.password, 10);
          }

          next();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
}); //GENERATE TOKEN TO VERIFY USER

registerSchema.methods.generateToken = function _callee2() {
  var generatedToken;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          generatedToken = jwt.sign({
            _id: this._id
          }, process.env.SECRET_KEY);
          this.tokens = this.tokens.concat({
            token: generatedToken
          });
          _context2.next = 5;
          return regeneratorRuntime.awrap(this.save());

        case 5:
          return _context2.abrupt("return", generatedToken);

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, this, [[0, 8]]);
}; //CREATE MODEL


var Registrations = new mongoose.model("Registration", registerSchema);
module.exports = Registrations;