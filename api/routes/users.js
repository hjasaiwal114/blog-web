// importing neccessary modules and dependencies
const router = require("express").Router();
const User = require("../models/User");
const Post  = require("../models/Post");
const bcrypt = require("bcrypt");

// Update route for user profile
router.put("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const updateUserId = req.body.userId;

    if (userId !== updateUserId) {
        return res.status(401).json({error: "Unauthorized - You cna update only your account!" });
    }

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt)
    }

    const updateUser =  awaitUser.findByidAndUpdate(userId, { $set : req.body }, {new: true});

    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({error: "Internal Sevrer Error"});
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const requestingUserId = req.body.userId;

    if (userId !== requestingUserId) {
      return res.status(401).json({error: "Unauthorized - You can delete only your account! "});
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    await Post.deleteMany({ username: user.name });

    await User.findByIdAndDelete(userId);

    res.status(500).json({error: "Internal Server Error" });
  } catch (error) {
    res.status(500).json({ error: "Internal server Error"});
  }
});

// Get route for retrieving user profile by ID
router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const user  = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found"})
    }

    const { password, ...others } = user._docs;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json({ error: "Internal Sevrer Error"});
  }
});

// export router for use in other parts of teh applicaton
module.exports = router;