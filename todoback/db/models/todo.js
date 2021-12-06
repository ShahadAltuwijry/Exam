const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  isDel: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  timeStamp: { type: Date, default: new Date() },
});

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;

// {
//     _id: "ngbnhvmhbkmjbk",
//     task: "sleeeeeeeep",
//     isDel: false,
//     isCompleted: false,
//   }
