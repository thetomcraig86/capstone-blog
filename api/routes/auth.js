const router = require("express").Router();
const User = require("../models/User");


//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User(req.body);
  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Incorrect Login Information");

    const password = await User.findOne({password: req.body.password});
    !password && res.status(400).json("Incorrect Login Information");

    
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
   
  }
});

module.exports = router;
