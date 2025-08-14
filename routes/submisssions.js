const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

// Submit answers
router.post('/', async (req, res) => {
  const submission = new Submission(req.body);
  await submission.save();
  res.json(submission);
});

// Get all submissions
router.get('/', async (req, res) => {
  const submissions = await Submission.find();
  res.json(submissions);
});

module.exports = router;
