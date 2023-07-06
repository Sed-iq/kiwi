// Creates item
const errorHandle = require("../errorHandle");
const schema = require("./../Schema");
module.exports = async (req, res) => {
  const { name, price, quantity, length, width, size } = req.body;
  if (!name || !price || !quantity) {
    errorHandle("Missing inputs", 401, res);
  } else {
    // Data inputted
    try {
      const user = await schema.user.findById(req.usr);
      const Item = await schema.item.findOne({ name: name });
      if (Item) {
        errorHandle(
          "Item with that name already exisits in your inventory",
          202,
          res
        );
      } else {
        const item = new schema.item({
          name: name,
          price: price,
          quantity: quantity,
          length: length,
          width: width,
          size: size,
          sold: 0,
          owner: user._id,
        });
        item
          .save()
          .then((data) => {
            schema.user
              .updateOne({ _id: user._id }, { $push: { items: data._id } })
              .then((data) => res.json({ message: "Done" }))
              .catch((err) => {
                console.error(err);
              });
          })
          .catch((err) => errorHandle(err, 500, res));
      }
    } catch (err) {
      errorHandle(err, 500, res);
    }
  }
};
