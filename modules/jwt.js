const jwt = require("jsonwebtoken");
module.exports.sign = (token) => {
  return jwt.sign({ id: token }, process.env.SECRET, { expiresIn: "18hrs" });
};
module.exports.verify = (hash) => {
  return jwt.verify(hash, process.env.SECRET, (err, decoded) => {
    if (err) {
      console.error(err);
      return null;
    } else {
      return decoded.id;
    }
  });
};
