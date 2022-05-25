"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InstructionsList = void 0;

var _Login = _interopRequireDefault(require("../../Assets/Login.svg"));

var _detection = _interopRequireDefault(require("../../Assets/detection.svg"));

var _Transafer = _interopRequireDefault(require("../../Assets/Transafer.svg"));

var _Status = _interopRequireDefault(require("../../Assets/Status.svg"));

var _logout = _interopRequireDefault(require("../../Assets/logout.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InstructionsList = [{
  image: _Login["default"],
  text: "Create Account by filling the credentials name, mobile no., email, username, password, adhaar no, account no. and amount transfer to your account"
}, {
  image: _detection["default"],
  text: "Every bank provide internet banking to the accountholders with privacy and security, but World BANK provides you much more than this, you can only login when your face detect succeessfully"
}, {
  image: _Status["default"],
  text: "You can check your available balance by just clicking on 'users' section after logging in"
}, {
  image: _Transafer["default"],
  text: "You can transfer money to any bank's account holder from anywhere at any time, you only have to choose name, account no. and enter amount. Quick and easy transactions"
}, {
  image: _logout["default"],
  text: "Make sure that you have logged out, when done with your work"
}];
exports.InstructionsList = InstructionsList;