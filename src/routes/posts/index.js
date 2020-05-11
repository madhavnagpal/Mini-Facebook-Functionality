const { Users, Posts, Comments } = require("../../db/index");
const route = require("express").Router();
// const { createPost } = require("../../controllers/posts");

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
    console.log(post);
    console.log("=======");
    if (post) {
      res.status(201).send(post);
    } else {
      res.status(403).send("Bad Request ,user_id not match");
    }
  }
});

module.exports = route;

async function createPost(user_id, post_title, post_body) {
  let post;

  let user = await Users.findOne({
    where: { user_id },
  }).catch((err) => {
    console.log(err);
  });

  await (async function () {
    if (user) {
      let p = await Posts.create({
        post_title,
        post_body,
        userUserId: user_id,
      });

      await (function () {
        if (p) {
          post = p;
        } else {
          post = new Error("Post Not Created");
        }
      })();
    } else {
      post = null;
    }
  })();
  return post;
}
