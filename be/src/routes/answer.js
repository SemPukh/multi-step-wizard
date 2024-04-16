const express = require('express');
const router = express.Router();
const answerController = require('../controllers/answer-controller');
const { answerValidation } = require('../middlewares/answer-validation');

router.get('/', answerController.getAllAnswers);
router.post('/', answerValidation, answerController.createAnswer);

module.exports = router;
