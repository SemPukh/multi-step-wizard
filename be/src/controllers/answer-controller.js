const answerServices = require('../services/answer-services');

const getAllAnswers = async (req, res) => {
  try {
    const answers = await answerServices.getAllAnswers();

    res.status(200).send(answers);
  } catch (error) {
    res.status(400).send('Failed to get answers');
  }
};

const createAnswer = async (req, res) => {
  try {
    const answer = await answerServices.createAnswer(req.body);

    res.status(200).send(answer);
  } catch (error) {
    res.status(400).send('Failed to create answer');
  }
};

module.exports = {
  getAllAnswers,
  createAnswer,
};
