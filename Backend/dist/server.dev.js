"use strict";

var express = require("express");

var cors = require("cors");

var mongoose = require("mongoose");

var bcryptjs = require("bcryptjs");

var jwt = require("jsonwebtoken");

var cookieParser = require("cookie-parser");

require("dotenv").config();

var app = express();
var port = process.env.PORT || 5000; //these methods is used to get data and cookiess from frontend

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(cors());
var uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
var connection = mongoose.connection;
connection.once("open", function () {
  console.log("mongodb database connection established successfully!");
}); // const customerRouter = require("./routes/customerdets");

var transactionRouter = require("./routes/trasactionhist");

var registrations = require("./routes/register");

var contactRouter = require("./routes/contact");

var authenticate = require("./middleware/authentication"); // app.use(customerRouter);


app.use(transactionRouter);
app.use(registrations);
app.use(contactRouter);
app.use(authenticate);
app.get("/hehe", function (req, res) {
  res.send("I am listening");
  console.log("I am listening");
}); //Authentication

app.get('/auth', authenticate, function (req, res) {
  res.send("auth");
});
app.listen(port, function () {
  console.log("Server Running!!!");
});