const Sequelize = require("sequelize");
const db = require("../../db").db;

const Users = db.define("users", {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports.Users = Users;
