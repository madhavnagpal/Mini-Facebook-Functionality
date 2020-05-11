const { Users, Posts } = require("../../db/index");

async function createPost(user_id, post_title, post_body) {
  let post;
  Users.findOne({
    where: { user_id },
  })
    .then((user) => {
      Posts.create({
        post_title,
        post_body,
        userUserId: user_id,
      })
        .then((p) => {
          post = p;
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      post = null;
    });
  return post;
}

module.exports = {
  createPost,
};
