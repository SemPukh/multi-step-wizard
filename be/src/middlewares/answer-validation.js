const { check } = require('express-validator');
const { validatorResult } = require('./validation-result');

const answerValidation = [
  check('text').isString().trim().isLength({ min: 1 }),
  validatorResult,
];

module.exports = { answerValidation };
