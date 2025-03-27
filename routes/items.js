
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

