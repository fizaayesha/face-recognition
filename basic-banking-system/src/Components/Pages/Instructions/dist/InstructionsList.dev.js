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
  text: "Admin here perform the fuctions of transactions, so admin have to register first by entering his/her username, then face detection will take place, so admin have to sit properly."
}, {
  image: _detection["default"],
  text: "After successful registration, now admin have to login with the same username, now face recognition in which admin have to sit in the posture as was sitting during registration."
}, {
  image: _Status["default"],
  text: "Admin have to create account for the for the customers and only admin can do transactions where the customers want, and this is how the banking system works."
}, {
  image: _Transafer["default"],
  text: "Whenever accountholders wants to check their bank balance or their transaction history, they have to go to admin, admin will ask their name, after that he/she will provide all the required data to the accountholders."
}, {
  image: _logout["default"],
  text: "If admin forgot to logout then, he/she will be automatically logout when the pages reloa or refresh."
}];
exports.InstructionsList = InstructionsList;