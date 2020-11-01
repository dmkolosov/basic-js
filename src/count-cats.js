const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cats = 0;
  for (let index = 0; index < backyard.length; index++) {
    for (let y = 0; y < backyard[index].length; y++) {
      if (backyard[index][y]==="^^") cats += 1;
    }
  }
  return cats;
};
