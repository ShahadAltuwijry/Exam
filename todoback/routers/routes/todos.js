const express = require("express");
const {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("./../controllers/todos");
const todoRouter = express.Router();

todoRouter.get("/todos", getAllTodo);

todoRouter.get("/todo", getTodoById);

todoRouter.get("/todos/completed", getCompletedTodos);

todoRouter.post("/todos", createTodo);

todoRouter.put("/todos/:id", updateTodo);

todoRouter.delete("/todos/:id", deleteTodo);

module.exports = todoRouter;
