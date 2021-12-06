const express = require("express");
const {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  updateTodo,
  deleteTodo,
} = require("./../controllers/todos");

const todoRouter = express.Router();

todoRouter.get("/todos", getAllTodo);//checked
todoRouter.get("/todo", getTodoById); //checked ,query
todoRouter.get("/todos/completed", getCompletedTodos);//checked
todoRouter.post("/todos", createTodo);//checked
todoRouter.put("/compTodo/:id", completeTodo);//checked
todoRouter.put("/updTodo/:id", updateTodo);//checked
todoRouter.delete("/delete/:id", deleteTodo);//checked

module.exports = todoRouter;
