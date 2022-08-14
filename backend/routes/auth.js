const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'DeepakisdoingG$reat';

// Create a User using: POST "/api/auth/createuser". Doesn't require Authentication
router.post("/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({min: 5,}),
  ],
  async (req, res) => {
    // If there are errors return Bad req and errors....
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check whether the user with the same email exist or not !!!
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {return res.status(400).json({ errors: "User with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // creating new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      }); 

      const data = {
        user:{
          id: user.id,
        }
      }

      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({authtoken});
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error occured");
    }
  }
);

module.exports = router;
