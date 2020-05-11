const { randomNameGenerator } = require("../utility/users");
const { Users } = require("../db/users");

// creating new user with anonymous name
async function createAnonUser() {
  let user;
  await Users.findOrCreate({
    where: {
      user_name: randomNameGenerator(),
    },
  })
    .then((u) => {
      user = u;
    })
    .catch((e) => {
      user = e;
      console.log(e);
    });
  return user;
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
