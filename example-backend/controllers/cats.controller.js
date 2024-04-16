const cats = [];

// Create a new Cat
exports.createCat = (req, res) => {
  const cat = {
    id: cats.length + 1,
    name: req.params.name,
  };
  cats.push(cat);
  res.send(cat);
};

// Read all Cats
exports.readCats = (req, res) => {
  res.send(cats);
};

// Update a Cat
exports.updateCat = (req, res) => {
  const cat = cats.find((c) => c.id === parseInt(req.params.id));
  if (!cat) {
    return res.status(404).send("The cat with the given ID was not found.");
  }
  cat.name = req.params.name;
  res.send(cat);
};

// Delete a Cat
exports.deleteCat = (req, res) => {
  const index = cats.findIndex((c) => c.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("The cat with the given ID was not found.");
  }
  const deletedCat = cats.splice(index, 1);
  res.send(deletedCat);
};
