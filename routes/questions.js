const express = require('express');
const Question = require('../models/Question');
const router = express.Router();

router.post('/', async (req, res) => {
  const question = new Question(req.body);
  await question.save();
  res.send(question);
});

router.get('/', async (req, res) => {
  const questions = await Question.find();
  res.send(questions);
});

router.put('/:id', async (req, res) => {
  const updated = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

router.delete('/:id', async (req, res) => {
  await Question.findByIdAndDelete(req.params.id);
  res.send({ message: 'Deleted' });
});

module.exports = router;