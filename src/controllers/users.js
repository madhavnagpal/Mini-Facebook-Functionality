const { randomNameGenerator } = require("../utility/users");
const { Users } = require("../../db");

// creating new user with anonymous name
async function createAnonUser() {
  try {
    let user = await Users.findOrCreate({
      where: {
        user_name: randomNameGenerator(),
      },
    });

    return user;
  } catch {
    (e) => console.log(e);
  }
}

// finding user by id
async function findUserById(id) {
  return await Users.findOne({
    where: {
      user_id: id,
    },
  });
}

//finding user by name
async function findUserByName(name) {
  return await Users.findOne({
    where: {
      user_name: name,
    },
  });
}

module.exports = {
  createAnonUser,
  findUserById,
  findUserByName,
};
