const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

//these methods is used to get data and cookiess from frontend
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb database connection established successfully!");
});

// const customerRouter = require("./routes/customerdets");
const transactionRouter = require("./routes/trasactionhist");
const registrations = require("./routes/register");
const contactRouter = require("./routes/contact");
const authenticate = require("./middleware/authentication");
// app.use(customerRouter);
app.use(transactionRouter);
app.use(registrations);
app.use(contactRouter);
app.use(authenticate);

app.get("/hehe", (req, res) => {
  res.send("I am listening");
  console.log("I am listening");
});
//Authentication
app.get('/auth',authenticate,(req,res)=>{
res.send("auth")
})
app.listen(port, () => {
  console.log("Server Running!!!");
});
