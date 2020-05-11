const { Users, Posts, Comments } = require("../../db/index");
const route = require("express").Router();
const { createPost } = require("../../controllers/posts");

// get all posts
route.get("/", async function (req, res) {
  await Posts.findAll()
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

module.exports = route;
