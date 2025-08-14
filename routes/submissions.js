const express = require('express');
const Submission = require('../models/Submission');
const Test = require('../models/Test');
const router = express.Router();

router.post('/', async (req, res) => {
  const { candidate, testId, answers } = req.body;
  const test = await Test.findById(testId).populate('questions');
  let score = 0;
  test.questions.forEach((q, i) => {
    if (q.correctAnswer === answers[i]) score++;
  });
  const submission = new Submission({ candidate, test: testId, answers, score });
  await submission.save();
  res.send({ score });
});

router.get('/', async (req, res) => {
  const submissions = await Submission.find().populate('candidate test');
  res.send(submissions);
});

module.exports = router;