const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Register Schema
const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  account: {
    type: Number,
    minlength: 9,
    maxlength: 18,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    minlength: 10,
    maxlength: 10,
    required: true,
  },
  adhaar: {
    type: Number,
    minlength: 12,
    maxlength: 12,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
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
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//Hashing Password to secure
registerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcryptjs.hashSync(this.password, 10);
  }
  next();
});

//GENERATE TOKEN TO VERIFY USER
registerSchema.methods.generateToken = async function () {
  try {
    let generatedToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: generatedToken });
    await this.save();
    return generatedToken;
  } catch (error) {
    console.log(error);
  }
};

//CREATE MODEL
const Registrations = new mongoose.model("Registration", registerSchema);
module.exports = Registrations;
