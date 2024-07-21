const User = require("../models/user");

const getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

const createUser = async (req, res) => {
  const user = new User({
    firstName: "First Name 2",
    lastName: "last name 2",
    email: "email1@email.com",
    password: "123456789",
  });
  const users = await User.create(user);
  res.send(users);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const user = new User({
    firstName: "First Name 2",
    lastName: "last name 2",
    email: "email1@email.com",
    password: "123456789",
  });
  const users = await User.findOneAndUpdate({ _id: id }, { $set: user });
  res.send(users);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = new User({
    firstName: "First Name 3",
    lastName: "last name 3",
    email: "email3@email.com",
    password: "123456789",
  });
  const users = await User.findOneAndDelete(user);
  res.send(users);
};

module.exports = { getUsers, createUser, updateUser };
