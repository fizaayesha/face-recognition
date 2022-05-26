"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateHandler = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var updateHandler = function updateHandler(sender, receiver, amount) {
  console.log(sender);
  console.log(receiver);
  console.log(amount);
  var transHistory = {
    // transactionId: Number(
    //   String(sender.customerId) + String(receiver.customerId)
    // ),
    sender: "".concat(sender.name),
    receiver: "".concat(receiver.name),
    amount: Number(amount)
  };
  console.log(transHistory); //update the transaction history

  _axios["default"].post("".concat(process.env.REACT_APP_SERVER_URL, "/transactions/add"), transHistory).then(function (response) {
    return console.log(response);
  })["catch"](function (error) {
    return console.log(error);
  }); //update the userdetails


  _axios["default"].post("".concat(process.env.REACT_APP_SERVER_URL, "/register/update/").concat(sender._id), sender).then(function (response) {
    return console.log(response);
  })["catch"](function (error) {
    return console.log(error);
  }); //update receiver in userdetails


  _axios["default"].post("".concat(process.env.REACT_APP_SERVER_URL, "/register/update/").concat(receiver._id), receiver).then(function (response) {
    return console.log(response);
  })["catch"](function (error) {
    return console.log(error);
  });
};

exports.updateHandler = updateHandler;