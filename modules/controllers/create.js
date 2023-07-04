// Creates item
const errorHandle = require("../errorHandle");
const schema = require("./../Schema");
module.exports = (req, res) => {
  const { name, price, quantity, length, width, size } = req.body;
  if (!name || !price || !quantity) {
    errorHandle("Missing inputs", 401, res);
  } else {
    // Data inputted
    try {
      const item = new schema.item({
        name: name,
        price: price,
        quatity: quantity,
        length: length,
        width: width,
        size: size,
      });
      item
        .save()
        .then((data) => {})
        .catch((err) => errorHandle(err, 500, res));
    } catch (err) {
      errorHandle(err, 500, res);
    }
  }
};
