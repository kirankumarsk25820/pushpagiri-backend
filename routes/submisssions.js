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
router.get('/', (req, res) => {
  res.send('Submissions route working!');
});


module.exports = router;
