const express = require("express");
const router = new express.Router();
const Contact = require("../models/contactSchema");

//Routing for contact page
//contact page messages
router.route("/contact").post(async (req, res) => {
  try {
    //get body or data
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const message = req.body.message;

    const sendMessage = new Contact({
      name: name,
      phone: phone,
      email: email,
      message: message,
    });
    const created = await sendMessage.save();
    console.log(created);
    res.status(200).send("Message sent");
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;