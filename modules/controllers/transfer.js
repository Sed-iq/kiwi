// Transfers item to sold point in item schema
const schema = require("../Schema");
const errorHandle = require("../errorHandle");
module.exports = async (req, res) => {
  try {
    const invetory = await schema.item.findById(req.params.id);
    const number = invetory.sold + 1;
    const quantity = invetory.quantity - 1;
    if (invetory) {
      schema.item
        .findByIdAndUpdate(req.params.id, { sold: number, quantity: quantity })
        .then(() => res.json({ message: "1 item transferred to sold" }))
        .catch((err) => errorHandle(err, 404, res));
    }
  } catch (err) {
    console.log(err);
    errorHandle("Item not found", 404, res);
  }
};
