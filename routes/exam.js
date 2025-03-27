// PUT request - Update an exam by ID
router.put('/:id', (req, res) => {
  const examId = parseInt(req.params.id);
  const updatedData = req.body;

  // Validate that required fields exist (name and date)
  if (!updatedData.name || !updatedData.date) {
    return res.status(400).send('Exam name and date are required');
  }

  // Find the exam by ID
  const examIndex = exams.findIndex(exam => exam.id === examId);

  if (examIndex === -1) {
    return res.status(404).send('Exam not found');
  }

  // Update the exam
  exams[examIndex] = { ...exams[examIndex], ...updatedData };
  res.json(exams[examIndex]);
});
