const express = require('express');
const router = express.Router();

// Sample data stored in an array
let exams = [];

// GET request - Retrieve an exam by ID
router.get('/:id', (req, res) => {
  const examId = parseInt(req.params.id);

  // Find the exam by ID
  const exam = exams.find(exam => exam.id === examId);

  if (!exam) {
    return res.status(404).send('Exam not found');
  }

  res.json(exam);
});

// GET request - Retrieve all exams
router.get('/', (req, res) => {
  res.json(exams);
});

module.exports = router;
