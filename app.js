const express = require("express"); // import express js
const { getUsers, createUser } = require("./controllers/userController");
const mongoose = require("mongoose");
const app = express(); //
const port = 3000;

mongoose
  .connect(
    "mongodb+srv://tideto4179:nPdphum5IzkkkSPz@cluster0.b7regnm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((res) => console.log(`Database connected successfuly!.....`))
  .catch((err) => console.log(err));

const data = [];

app.get("/", getUsers);
app.post("/", createUser);
app.put("/", getUsers);
app.delete("/", createUser);

// app.get("/", (req, res) => {
//   res.send(data);
// });

app.get("/users", (req, res) => {
  res.send("Hello welcome to user api");
});

app.listen(port, () => {
  console.log(`Server is running on ${port} port;`);
});
