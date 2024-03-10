const express = require("express");
const router = express.Router();
const User = require("../Database/User");
// const { author_list, add_to_list } = require("../controller/Users");


router.get("/");
router.post("/", (req, res) => {
  // Extract data from request body
  const { name, age } = req.body;
  const newUser = new User({ name, age });
  newUser.save();
  // Send a success response
  res.status(201).send("Data added to the list successfully");
});

module.exports = router;
