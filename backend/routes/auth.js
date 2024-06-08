const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require('bcrypt');

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { email, password, username } = req.body;
    
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashpw = bcrypt.hashSync(password, 10);
    
    // Create and save a new user
    const user = new User({ email, username, password: hashpw });
    await user.save();

    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
});



//sign in
router.post("/signin", async (req, res) => {
  try{
    const user = await User.findOne({email:req.body.email});
    if(!user){
      res.status(400).json({ message: "please register first!", error });

    }
const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);

if(!isPasswordCorrect){
  res.status(400).json({ message: "Wrong password!!", error });

}

const {password,...others}= user._doc;
res.status(200).json({ others });

  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
});


module.exports = router;
