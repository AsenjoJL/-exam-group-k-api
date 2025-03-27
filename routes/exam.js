

// routes/items.js

const express = require('express');
const router = express.Router();

// Sample data stored in an array

let items = [];

// GET request - Retrieve an item by id
router.get('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);

  // Find the item by id
  const item = items.find(item => item.id === itemId);

  if (!item) {
    return res.status(404).send('Item not found');
  }

  res.json(item);
});

// GET request - Retrieve all items
router.get('/', (req, res) => {
  res.json(items);
});

module.exports = router;

const express = require('express');
const router = express.Router();

// Sample exams data stored in an array
let exams = [
  { id: 1, name: "Math Exam", date: "2025-04-01" },
  { id: 2, name: "Science Exam", date: "2025-04-05" }
];

// POST /exams - Add a new exam
router.post('/', (req, res) => {
  const newExam = req.body;

  // Validate that required fields exist
  if (!newExam.name || !newExam.date) {
    return res.status(400).json({ message: "Exam name and date are required." });
  }

  // Assign a new ID
  newExam.id = exams.length + 1;
  exams.push(newExam);

  res.status(201).json(newExam);
});

module.exports = router;



// PUT request - Update an item by id
router.put('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedData = req.body;

  // Validate that the required fields exist (firstname, lastname, and age)
  if (!updatedData.firstname || !updatedData.lastname || !updatedData.age) {
    return res.status(400).send('Firstname, lastname, and age are required');
  }

  // Validate that age is a number
  if (isNaN(updatedData.age)) {
    return res.status(400).send('Age must be a number');
  }

  // Find the item by id
  const itemIndex = items.findIndex(item => item.id === itemId);

  if (itemIndex === -1) {
    return res.status(404).send('Item not found');
  }

  // Update the item
  items[itemIndex] = { ...items[itemIndex], ...updatedData };
  res.json(items[itemIndex]);
});



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

