const schema = require("./Schema"),
  errorHandle = require("./errorHandle"),
  jwt = require("./jwt"),
  Schema = require("./Schema"),
  crypt = require("./bcrypt");

module.exports.login = async (req, res) => {
  if (req.body.email == null || req.body.password == null) {
    errorHandle("Please input email or password", 404, res);
  } else {
    // User inputted
    try {
      const user = await Schema.user.findOne({ email: req.body.email });
      if (user) {
        crypt
          .compare(req.body.password, user.password)
          .then((data) => {
            if (data == true) {
              // Sigin using jwt
              const token = jwt.sign(user._id);
              res.json({ token });
            } else errorHandle("Wrong password", 401, res);
          })
          .catch((err) => errorHandle(err, 404, res));
      }
    } catch (err) {
      errorHandle("Server err", 500, res);
    }
  }
};
