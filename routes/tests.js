const express = require('express');
const router = express.Router();
const Test = require('../models/Test');

router.post('/', async (req, res) => {
  const test = new Test(req.body);
  await test.save();
  res.json(test);
});

router.get('/', async (req, res) => {
  const tests = await Test.find();
  res.json(tests);
});

module.exports = router;