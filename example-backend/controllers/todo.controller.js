let todos = [];
let currentId = 1;

// Create a new Todo
exports.createTodo = (req, res) => {
  const { title, priority } = req.body;
  const newTodo = {
    id: currentId++,
    title,
    priority,
    createdAt: new Date(),
    done: false,
    doneAt: null,
  };
  todos.push(newTodo);
  res.send(newTodo);
};

// Read all Todos
exports.readTodos = (req, res) => {
  res.send(todos);
};

// Update a Todo
exports.updateTodo = (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).send("The todo with the given ID was not found.");
  }
  todo.title = req.body.title || todo.title;
  todo.priority = req.body.priority || todo.priority;
  todo.done = req.body.done;
  if (todo.done) {
    todo.doneAt = new Date();
  }
  res.send(todo);
};

// Delete a Todo
exports.deleteTodo = (req, res) => {
  const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("The todo with the given ID was not found.");
  }
  const deletedTodo = todos.splice(index, 1);
  res.send(deletedTodo);
};
