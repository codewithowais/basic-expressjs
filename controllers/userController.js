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

module.exports = { getUsers, createUser };
