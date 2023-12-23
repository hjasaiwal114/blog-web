// Import neccesssary models and dependencies
const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// Create Post route

router.post("/", async(req, res) => {
    const newPost  = new Post(req.body);

    try {
        const savedPost = await newPost.save();

        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update Post route 
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    { $set: req.body },
                    { new: true }
                );

                // respond with updated process
                res.status(200).json(updatePost);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can update only your post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
 });

//  DELETE POST route
 
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post has been deleted ...");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.json(401).json("you can delete only your post!");
        }
    }catch (err) {
        res.status(500).json(err);
    }
});

// Get post by id route
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    // Extract query params from the request
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;

        // check if a specifc username is provided in the query
        if (username) {
            posts = await Post.find({ username });
        } else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName],
                },
            });
        } else {
            // if no qer parameters are provided, fetch all posts
            posts = await Post.find();
        }

        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;