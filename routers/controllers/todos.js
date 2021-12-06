const todoModel = require("./../../db/models/todo");

//getting exesting tasks
const getAllTodo = (req, res) => {
  try {
    todoModel
      .find({ isDel: false })
      // .select("task timeStamp")
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//getting task by id
const getTodoById = (req, res) => {
  const { id } = req.query;

  todoModel
    .findOne({ _id: id, isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

//getting completed tasks
const getCompletedTodos = (req, res) => {
  todoModel
    .find({ isDel: false, isCompleted: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

//creating a task
const createTodo = (req, res) => {
  const { task } = req.body;

  const newTodo = new todoModel({
    task: task,
    // isCompleted,
    // isDel,
    // timeStamp,
  });

  newTodo
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

//setting task as completed
const completeTodo = (req, res) => {
  const { id } = req.params;

  todoModel
    .findOneAndUpdate(
      { _id: id },
      { $set: { isCompleted: true } },
      { new: true }
    )
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

//updating the task
const updateTodo = (req, res) => {
  const { id } = req.params;
  const newTask = req.body.task;

  todoModel
    .findOneAndUpdate({ _id: id }, { $set: { task: newTask } }, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

//setting task as deleted
const deleteTodo = (req, res) => {
  const { id } = req.params;

  todoModel
    .findOneAndUpdate({ _id: id }, { $set: { isDel: true } }, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  updateTodo,
  deleteTodo,
};
