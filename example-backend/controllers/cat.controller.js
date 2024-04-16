const cats = [];

exports.create = (req, res) => {
  const cat = {
    name: req.body.name,
    age: req.body.age,
  };
  cats.push(cat);
  res.send(cat);
};

exports.read = (req, res) => {
  res.send(cats);
};
