const express = require('express');
const app = express();

app.use(express.json());

// Import routes
const examRoutes = require('./routes/exam'); // Updated from 'items' to 'exam'

app.use('/exams', examRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
