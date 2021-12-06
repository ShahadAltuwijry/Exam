const todoModel = require("./../../db/models/todo");

let todos = [
  {
    id: 1,
    task: "sleeeeeeeep",
    isDel: false,
    isCompleted: false,
  },
  { id: 2, task: "eat", isDel: false, isCompleted: false },
  { id: 3, task: "more sleeeeeeeep", isDel: false, isCompleted: false },
];

const getAllTodo = (req, res) => {
  try {
    const existTodos = todos.filter((todo) => !todo.isDel);

    res.status(200).json(existTodos);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getTodoById = (req, res) => {
  const { id } = req.query;
  try {
    const found = todos.find((item) => {
      return item.id == id;
    });

    if (!id) {
      res.status(400).json("you must put an id as query");
    } else {
      if (found) {
        if (found.isDel) {
          res.status(404).json("is deleted");
        } else res.status(200).json(found);
      } else res.status(400).json("not found");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const getCompletedTodos = (req, res) => {
  try {
    const found = todos.filter((item) => {
      return item.isCompleted == true && item.isDel == false;
    });

    if (found) res.status(200).json(found);
    else res.status(400).json("not found");
  } catch (error) {
    res.status(400).json(error);
  }
};

const createTodo = (req, res) => {
  const newTask = {
    id: todos.length + 1,
    task: req.body.task,
    isDel: false,
    isCompleted: false,
  };
  todos.push(newTask);
  try {
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { task, isCompleted } = req.body;
  let index = 0;
  try {
    const found = todos.find((item, i) => {
      index = i;
      return item.id == id;
    });

    if (found) {
      if (found.isDel) {
        res.status(404).json("is deleted");
      } else {
        if (task) found.task = task;
        if (isCompleted !== undefined) found.isCompleted = isCompleted;

        todos[index] = found;
        res.status(200).json(found);
      }
    } else res.status(400).json("not found");
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  let index = 0;
  try {
    const found = todos.find((item, i) => {
      index = i;
      return item.id == id;
    });

    if (found) {
      if (found.isDel) {
        res.status(404).json("is deleted");
      } else {
        todos[index].isDel = true;
        res.status(200).json(todos);
      }
    } else res.status(400).json("not found");
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
