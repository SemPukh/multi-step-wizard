const Question = require('../models/question');

const getAllQuestions = async () => {
  const questions = await Question.find().sort({
    order: 'asc',
  });

  return questions;
};

const getOneQuestion = async (questionOrderId) => {
  const question = await Question.find({ order: questionOrderId });

  return question;
};

const createOneQuestion = async (newQuestionInfo) => {
  const newQuestion = await Question.create(newQuestionInfo);

  return newQuestion;
};

const createManyQuestions = async (newQuestionInfoArr) => {
  const newQuestions = await Question.insertMany(newQuestionInfoArr);

  return newQuestions;
};

const deleteQuestion = async (questionId) => {
  const deletedQuestion = await Question.findOneAndDelete({ _id: questionId });

  return deletedQuestion;
};

const updateQuestion = async (questionId, newData) => {
  const updatedQuestion = await Question.findOneAndUpdate(
    { _id: questionId },
    newData,
    { new: true },
  );

  return updatedQuestion;
};

module.exports = {
  getAllQuestions,
  getOneQuestion,
  createOneQuestion,
  createManyQuestions,
  deleteQuestion,
  updateQuestion,
};
