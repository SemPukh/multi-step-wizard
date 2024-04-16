const express = require("express");
const answers = require("./answer");
const questions = require("./question");
const router = express.Router();

router.use("/answers", answers);
router.use("/questions", questions);

module.exports = router;
