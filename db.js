const Sequelize = require("sequelize");

module.exports.db = db = new Sequelize({
  dialect: "sqlite",
  storage: __dirname + "/socialmedia.db",
});

const { Comments } = require("./src/db/comments");
const { Users } = require("./src/db/users");
const { Posts } = require("./src/db/posts");

// associations
Users.hasMany(Posts);
Posts.belongsTo(Users);

Posts.hasMany(Comments);
Comments.belongsTo(Posts);

Users.hasMany(Comments);
Comments.belongsTo(Users);

module.exports = {
  db,
  Users,
  Comments,
  Posts,
};
