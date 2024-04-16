const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    default: [],
  },
});

module.exports = Question = mongoose.model('Questions', questionSchema);
