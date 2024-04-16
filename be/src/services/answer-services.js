const Answer = require('../models/answer');

const getAllAnswers = async () => {
  const answers = await Answer.find();

  return answers;
};

const createAnswer = async (answerData) => {
  const question = await Answer.create(answerData);

  return question;
};

module.exports = {
  getAllAnswers,
  createAnswer,
};
