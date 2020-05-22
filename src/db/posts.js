const Sequelize = require("sequelize");
const db = require("../../db").db;

const Posts = db.define("posts", {
  post_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  post_title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  post_body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports.Posts = Posts;
