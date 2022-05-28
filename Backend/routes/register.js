const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = new express.Router();
const Register = require("../models/registerSchema");

//registrations
router.route("/profile").get((req, res) => {
  Register.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/profile/:id").get((req, res) => {
  Register.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/register").post(async (req, res) => {
  try {
    //get body or data
    const name = req.body.name;
    const account = req.body.account;
    const phone = req.body.phone;
    const adhaar = req.body.adhaar;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const amount = req.body.amount;

    const createNewUser = new Register({
      name: name,
      account: account,
      phone: phone,
      adhaar: adhaar,
      email: email,
      username: username,
      password: password,
      amount: amount,
    });
    //save method is used to create user or insert user but before saving or inserting, password will hash because of hashing, After hash it willsave to db
    const created = await createNewUser.save();
    console.log(created);
    res.status(200).send(created);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.route("/register/:id").get((req, res) => {
  Register.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/register/update/:id").post(async (req, res) => {
  Register.findById(req.params.id)
    .then((user) => {
      user.name = req.body.name;
      user.account = req.body.account;
      user.phone = req.body.phone;
      user.adhaar = req.body.adhaar;
      user.email = req.body.email;
      user.username = req.body.username;
      user.password = req.body.password;
      user.amount = req.body.amount;
      user
        .save()
        .then(() => res.json("user database updated"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/login").post(async (req, res) => {
  try {
    //get body or data
    const username = req.body.username;
    const password = req.body.password;
    //find user if exist
    const userExist = await Register.findOne({
      username: username,
    });
    if (userExist) {
      //verify password
      const isMatch = await bcryptjs.compare(password, userExist.password);
      if (isMatch) {
        //generate token which is define in registerSchema
        const token = await userExist.generateToken();
        res.cookie("jwt", token, {
          //expires token in 24 hours
          expires: new Date(Date.now() + 86400000),
          httpOnly: true,
        });
        return res.status(200).send("LoggedIn");
      } else {
        return res.status(400).send("Invalid credentials");
      }
    } else {
      return res.status(400).send("Invalid credentials");
    }
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.route("/logout").get(async (req, res) => {
  res.clearCookie("jwt", { path: "/" });
  res.status(200).send("User Logged Out");
});

module.exports = router;
