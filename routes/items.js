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
