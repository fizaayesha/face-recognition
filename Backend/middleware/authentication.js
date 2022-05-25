//Authenticate the middle ware.
//It will checked before the response
const Users = require("../models/registerSchema");
const jwt = require("jsonwebtoken");
const authenticate = async (req, res,next) => {
  try {
    //Get the cookies
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).send("No token");
    } else {
      const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
      const rootUser = await Users.findOne({
        _id: verifyToken._id,
        "tokens.token": token,
      });
      if (!rootUser) {
        return res.status(401).send("User Not Found");
      } else {
        return res.status(200).send("Authorized User");
      }
    }
    next();
  } catch (err) {
    return res.status(401).send("Error");
    console.log(err);
  }
};
module.exports = authenticate;
