const CustomError = require("../extensions/custom-error");

const SEASONS = ["spring", "summer", "autumn (fall)", "winter"];
module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (date instanceof Date) {
    if (!date.getTime()) throw error;
    try {
      let m = date.getMonth();

      if ([0, 1, 11].includes(m)) {
        return SEASONS[3];
      }
      if ([2, 3, 4].includes(m)) {
        return SEASONS[0];
      }
      if ([5, 6, 7].includes(m)) {
        return SEASONS[1];
      }
      if ([8, 9, 10].includes(m)) {
        return SEASONS[2];
      }
      return "Unable to determine the time of year!";
    } catch (error) {
      throw error;
    }
  } else {
    throw new Error("Error");
  }
};
