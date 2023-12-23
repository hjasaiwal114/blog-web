// Import necessary modules and dependencies
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER route for user registration
router.post("/register", async (req, res) => {
  try {
    // Generate a salt for password hashing
    const salt = await bcrypt.genSalt(10);

    // Hash the user's password using the generated salt
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    // Create a new User instance with hashed password
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    // Save the new user to the database
    const user = await newUser.save();

    // Respond with the user information
    res.status(200).json(user);
  } catch (err) {
    // Handle errors and respond with a generic error message
    res.status(500).json(err);
  }
});

// LOGIN route for user authentication
router.post("/login", async (req, res) => {
  try {
    // Find a user with the provided username in the database
    const user = await User.findOne({ username: req.body.username });

    // If no user is found, respond with an error message
    !user && res.status(400).json("Wrong credentials!");

    // Compare the provided password with the hashed password stored in the database
    const validated = await bcrypt.compare(req.body.password, user.password);

    // If the passwords do not match, respond with an error message
    !validated && res.status(400).json("Wrong credentials!");

    // Exclude the password field from the user document
    const { password, ...others } = user._doc;

    // Respond with the user profile (excluding the password)
    res.status(200).json(others);
  } catch (err) {
    // Handle errors and respond with a generic error message
    res.status(500).json(err);
  }
});

// Export the router for use in other parts of the application
module.exports = router;
