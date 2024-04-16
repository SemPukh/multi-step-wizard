const questionServices = require('../services/question-services');

const getAllQuestions = async (req, res) => {
  try {
    const questions = await questionServices.getAllQuestions();

    res.status(200).send(questions);
  } catch (error) {
    res.status(400).send('Failed to get questions');
  }
};

const getAllQuestionsCount = async (req, res) => {
  try {
    const questions = await questionServices.getAllQuestions();

    res.status(200).send(JSON.stringify(questions.length));
  } catch (error) {
    console.log('error', error);
    res.status(400).send('Failed to get questions count');
  }
};

const getOneQuestion = async (req, res) => {
  try {
    const question = await questionServices.getOneQuestion(req.params.orderId);

    res.status(200).send(question[0]);
  } catch (error) {
    res.status(400).send('Failed to get question');
  }
};

const createOneQuestion = async (req, res) => {
  try {
    const question = await questionServices.createOneQuestion(req.body);

    res.status(200).send(question);
  } catch (error) {
    res.status(400).send('Failed to create question');
  }
};

const createManyQuestions = async (req, res) => {
  try {
    const questions = await questionServices.createManyQuestions(req.body);

    res.status(200).send(questions);
  } catch (error) {
    res.status(400).send('Failed to create questions');
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const question = await questionServices.deleteQuestion(req.questionId);

    res.status(200).send(question);
  } catch (error) {
    res.status(400).send('Failed to delete question');
  }
};

const updateQuestion = async (req, res) => {
  try {
    const question = await questionServices.updateQuestion(
      req.questionId,
      req.body,
    );

    res.status(200).send(question);
  } catch (error) {
    res.status(400).send('Failed to update question');
  }
};

module.exports = {
  getAllQuestions,
  getOneQuestion,
  createOneQuestion,
  createManyQuestions,
  deleteQuestion,
  updateQuestion,
  getAllQuestionsCount,
};
