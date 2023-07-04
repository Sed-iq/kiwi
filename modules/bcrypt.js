const bcrypt = require("bcryptjs");

module.exports.compare = (str, hash) => {
  if (str && hash) {
    return new Promise((resolve, reject) => {
      bcrypt
        .compare(str, hash)
        .then((data) => {
          if (data === true) resolve(true);
          else resolve(false);
        })
        .catch((err) => reject(err));
    });
  } else {
    console.error("Please input string");
    return false;
  }
};
