const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(req.body.password, salt);
        const newUser  = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedpass,
        });


    }
})