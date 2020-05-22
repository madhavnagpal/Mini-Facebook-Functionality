const route = require("express").Router();
const { Users } = require("../../db");
const {
  createAnonUser,
  findUserById,
  findUserByName,
} = require("../controllers/users");

// getting all the users
route.get("/", function (req, res) {
  Users.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.send(err);
    });
});

// creating a new user
route.post("/", async function (req, res) {
  let user = await createAnonUser();
  res.send(user);
});

// getting one user
route.get("/:id", async function (req, res) {
  let user,
    id = req.params.id;
  if (isNaN(parseInt(id))) {
    user = await findUserByName(id);
  } else {
    user = await findUserById(id);
  }
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(500).send("No User found");
  }
});

module.exports = route;
