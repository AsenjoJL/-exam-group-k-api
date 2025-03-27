


//app.js



//app.js



const express = require('express');
const app = express();

app.use(express.json());





// Import the routes from the items.js file
const itemsRoute = require('./routes/exam');

// Import routes
const examRoutes = require('./routes/exam'); // Updated from 'items' to 'exam'


app.use('/exams', examRoutes);


// Import the exams route
const examsRoute = require('./routes/exam');

// Import routes
const examRoutes = require('./routes/exam'); // Updated from 'items' to 'exam'


app.use('/exams', examRoutes);



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



// Import routes
const examRoutes = require('./routes/exam'); // Updated from 'items' to 'exam'

app.use('/exams', examRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

