const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question-controller');

router.get('/', questionController.getAllQuestions);
router.get('/count', questionController.getAllQuestionsCount);
router.get('/:orderId', questionController.getOneQuestion);
router.post('/one', questionController.createOneQuestion);
router.post('/many', questionController.createManyQuestions);
router.delete('/:questionId', questionController.deleteQuestion);
router.patch('/:questionId', questionController.updateQuestion);

module.exports = router;
