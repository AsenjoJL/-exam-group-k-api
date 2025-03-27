<<<<<<< HEAD

//app.js



//app.js

=======
>>>>>>> balongkit-Creation
const express = require('express');
const app = express();

app.use(express.json());

<<<<<<< HEAD


// Import the routes from the items.js file
const itemsRoute = require('./routes/exam');
=======
// Import routes
const examRoutes = require('./routes/exam'); // Updated from 'items' to 'exam'
>>>>>>> balongkit-Creation

app.use('/exams', examRoutes);

<<<<<<< HEAD
// Import the exams route
const examsRoute = require('./routes/exam');

// Use the exams route
app.use('/exams', examsRoute);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
=======
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
>>>>>>> balongkit-Creation
