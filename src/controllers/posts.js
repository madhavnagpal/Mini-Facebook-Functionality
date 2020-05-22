const { Users, Posts, Comments } = require("../../db");

async function createPost(user_id, post_title, post_body) {
  try {
    let user = await Users.findOne({
      where: { user_id },
    });

    if (user) {
      let post = await Posts.create({
        post_title,
        post_body,
        userUserId: user_id,
      });
      return post;
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createPost,
};
