const express = require("express");
const router = new express.Router();
const Register = require("../models/registerSchema");

//Routing for accountholders
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
    const amount = req.body.amount;

    const createNewUser = new Register({
      name: name,
      account: account,
      phone: phone,
      adhaar: adhaar,
      email: email,
      username: username,
      amount: amount,
    });
    //save method is used to create user or insert user but before saving or inserting
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
      user.amount = req.body.amount;
      user
        .save()
        .then(() => res.json("user database updated"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
