const Sequelize = require("sequelize");
const db = require("./index").db;

const Comments = db.define("comments", {
  comment_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  comment_body: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports.Comments = Comments;
