const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb database connection established successfully!");
});

//calling all the routes so that backend can work
const transactionRouter = require("./routes/trasactionhist");
const registrations = require("./routes/register");
const contactRouter = require("./routes/contact");
app.use(transactionRouter);
app.use(registrations);
app.use(contactRouter);

app.listen(port, () => {
  console.log("Server Running!!!");
});
