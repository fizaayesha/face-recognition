"use strict";

var express = require("express");

var cors = require("cors");

var mongoose = require("mongoose");

require("dotenv").config();

var app = express();
var port = process.env.PORT || 5001;
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
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
}); //calling all the routes so that backend can work

var transactionRouter = require("./routes/trasactionhist");

var registrations = require("./routes/register");

var contactRouter = require("./routes/contact");

app.use(transactionRouter);
app.use(registrations);
app.use(contactRouter);
app.listen(port, function () {
  console.log("Server Running!!!");
});