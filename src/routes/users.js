const route = require("express").Router();
const { Users } = require("../db/index");

// creating a new user
route.post("/", async function (req, res) {
  const newUserId = await Users.findOrCreate({
    where: {
      user_name: req.body.name,
    },
  })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// getting all the users
route.get("/", async function (req, res) {
  const allUsers = await Users.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//getting usets by id
route.get("/:id", async function (req, res) {
  if (isNaN(Number(req.params.id)))
    res.status(400).send("Please send integer id");
  else {
    await Users.findOne({
      where: {
        user_id: req.params.id,
      },
    })
      .then((user) => {
        if (user) res.status(200).send(user);
        else res.status(404).send("user not found");
      })
      .catch((err) => {
        res.status(401).send("err");
      });
  }
});
module.exports = route;
