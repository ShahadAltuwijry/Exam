const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
require("./db");

const todoRouter = require("./routers/routes/todos");

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(todoRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
