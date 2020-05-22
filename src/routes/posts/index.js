const { Users, Posts, Comments } = require("../../../db");
const route = require("express").Router();
const { createPost } = require("../../controllers/posts");

// get all posts
route.get("/", async function (req, res) {
  await Posts.findAll({
    include: [Users, Comments],
  })
    .then((posts) => {
      res.status(200).send(posts);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//post creation
route.post("/", async function (req, res) {
  const { id, title, body } = req.body;

  if (!id || !title || !body) {
    res.status(403).send("Bad Request , it must have user_id,title,body");
  } else {
    const post = await createPost(id, title, body);
    if (post) {
      res.status(201).send(post);
    } else {
      res.status(403).send("Bad Request ,user_id not match");
    }
  }
});
// get all posts of a user
route.get("/:id", async function (req, res) {
  try {
    let posts = await Posts.findAll({
      where: {
        userUserId: req.params.id,
      },
    });
    res.status(200).send(posts);
  } catch {
    (err) => {
      res.status(500).send(err);
    };
  }
});

module.exports = route;
