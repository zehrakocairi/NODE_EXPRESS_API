import { v4 as uuidv4 } from "uuid";
uuidv4();

let users = [];

export const getUsers = (req, res) => {
  if (users.length > 0) {
    res.status(200).send(users);
  } else res.status(404).send("There is not user in database");
};

export const createUser = (req, res) => {
  const user = req.body;

  if (user.firstname && user.lastname && user.age) {
    users.push({ id: uuidv4(), ...user });
    res.status(200).send("user added succesfully");
  } else res.status(400).send("fistname, lastname and age are required to create a user");
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id == id);

  if (user) {
    res.status(200).send(user);
  }
  res.status(400).send("user not found");
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const noUserFound = !users.some((user) => user.id == id);
  if (noUserFound) {
    res.status(400).send("No user found to delete!");
    return;
  }
  users = users.filter((user) => user.id !== id);
  res.status(200).send("user deleted succesfully");
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const patch = req.body;

  let currentUser = users.find((user) => user.id == id);

  if (currentUser) {
    currentUser = { ...currentUser, ...patch };
    res.status(200).send("user updated succesfully");
  } else res.status(400).send("user to be updated not found");
};
