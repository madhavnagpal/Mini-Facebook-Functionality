const adjectives = [
  "stimulating",
  "sincere",
  "fearless",
  "smart",
  "gorgeous",
  "melodic",
  "humorous",
];

const birds = ["albatross", "kingfisher", "sparrow", "auk", "nightjar"];

function randomNameGenerator() {
  let name = "";
  name += adjectives[Math.floor(Math.random() * 7)];
  name += "-";
  name += birds[Math.floor(Math.random() * 5)];
  return name;
}

module.exports = {
  randomNameGenerator,
};
