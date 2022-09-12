require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 3080;

app.use(express.json());
app.use(require("./routes/users.route"));
app.use(require("./routes/posts.route"));
app.use(require("./routes/comments.route"));

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("Успешное соединение с сервером MongoDB"))
  .catch(() => console.log("Ошибка соединения"));

app.listen(port, () => {
  console.log("app listening at port 3080");
});
