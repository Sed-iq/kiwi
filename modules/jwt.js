const jwt = require("jsonwebtoken");
module.exports.sign = (token) => {
  return jwt.sign({ id: token }, process.env.SECRET, { expiresIn: "18hrs" });
};
module.exports.verify = (hash) => {
  return new Promise((resolve, reject) => {
    jwt.decode(hash, (err, decoded) => {
      if (err) reject(err);
      else resolve(decoded);
    });
  });
};
