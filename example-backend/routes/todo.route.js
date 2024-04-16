const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const todosController = require("../controllers/todo.controller");

router.use(bodyParser.json());

router.post("/", todosController.createTodo);
router.get("/", todosController.readTodos);
router.put("/:id", todosController.updateTodo);
router.delete("/:id", todosController.deleteTodo);

module.exports = router;
