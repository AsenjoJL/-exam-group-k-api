
//app.js



//app.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());



// Import the routes from the items.js file
const itemsRoute = require('./routes/exam');

// Use the routes for the `/items` endpoint
app.use('/items', itemsRoute);

// Import the exams route
const examsRoute = require('./routes/exam');

// Use the exams route
app.use('/exams', examsRoute);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});