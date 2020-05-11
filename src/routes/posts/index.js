const { Users, Posts, Comments } = require("../../db/index");
const route = require("express").Router();

//handling post without id
route.post("/", (req, res) => res.status(403).send("Please send user id"));

//post created
route.post("/:id", function (req, res) {
  Users.findOne({
    where: {
      user_id: req.params.id,
    },
  })
    .then((user) => {
      if (user) {
        // //found user time to add post

        Posts.create({
          post_title: req.body.title,
          post_body: req.body.content,
          userUserId: user.user_id,
          post_id: req.body.id,
        })
          .then((post) => {
            res.status(201).send(post);
          })
          .catch((err) => res.status(501).send(err));
      } else {
        res.status(501).send("No User exists with this id");
      }
    })
    .catch((err) => res.status(501).send(err));
});

// get all posts
route.get("/", async function (req, res) {
  await Posts.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = route;
