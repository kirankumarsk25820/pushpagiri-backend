const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: String,
});

const testSchema = new mongoose.Schema({
  title: String,
  questions: [questionSchema],
});

module.exports = mongoose.model('Test', testSchema);