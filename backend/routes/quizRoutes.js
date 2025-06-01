const express = require('express');
const {
  getQuestions,
  submitResult,
  checkRetake,
} = require('../controllers/quizController');

const router = express.Router();

router.get('/questions', getQuestions);
router.post('/submit', submitResult);
router.get('/check-retake/:studentId', checkRetake);
router.post('/questions', uploadQuestions);

module.exports = router;
