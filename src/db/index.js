const Sequelize = require("sequelize");
module.exports.db = db = new Sequelize({
  database: "socialmedia",
  username: "postman",
  password: "socialmedia",
  dialect: "mysql",
});

const { Comments } = require("./comments");
const { Users } = require("./users");
const { Posts } = require("./posts");

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
