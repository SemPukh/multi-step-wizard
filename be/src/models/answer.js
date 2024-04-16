const mongoose = require('mongoose');
const { Schema } = mongoose;

const answerSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'Questions',
  },
});

module.exports = Answer = mongoose.model('Answers', answerSchema);
