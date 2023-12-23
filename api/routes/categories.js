// Import necessary modules and dependencies
const router = require("express").Router();
const Category = require("../models/Category");

// Create category route
router.post("/", async (req, res) => {
    // Create a new categry instance with data from the request body
    const newCat = new Category(req.body);
    try {
        const savedCat  = await newCat.save();

        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all caegories route
router.get("/", async (req, res) => {
    try {
        const cats = await Category.find();

        res.status(200).json(cats);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

