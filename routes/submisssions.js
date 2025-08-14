const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission'); // Make sure this model exists

// @route   POST /api/submissions
// @desc    Create a new submission
router.post('/', async (req, res) => {
  try {
    const newSubmission = new Submission(req.body);
    const savedSubmission = await newSubmission.save();
    res.status(201).json(savedSubmission);
  } catch (error) {
    console.error('Error creating submission:', error.message);
    res.status(500).json({ error: 'Server error while creating submission' });
  }
});

// @route   GET /api/submissions
// @desc    Get all submissions
router.get('/', async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.status(200).json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error.message);
    res.status(500).json({ error: 'Server error while fetching submissions' });
  }
});

module.exports = router;
