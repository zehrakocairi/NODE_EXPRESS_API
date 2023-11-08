import { v4 as uuidv4 } from "uuid";
uuidv4();

let users = [];

export const getUsers = (req, res) => {
  if (users.length > 0) {
    res.send(users);
  } else res.send("there is not user in database");
};
export const createUser = (req, res) => {
  const user = req.body;
  users.push({ id: uuidv4(), ...user });
  res.send("user added succesfully");
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const wantedUser = users.find((user) => user.id == id);
  res.send(wantedUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send("user deleted succesfully");
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;

  const user = users.find((user) => user.id == id);

  if (firstname) user.firstname = firstname;
  if (lastname) user.lastname = lastname;
  if (age) user.age = age;

  res.send("user changed succesfully");
};
