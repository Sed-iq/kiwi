// Stocks items up
const errorHandle = require("../errorHandle");
const schema = require("./../Schema");

module.exports = async (req, res) => {
  try {
    const { amount } = req.body;
    const item = await schema.item.findById(req.params.id);

    if (item) {
      const quantity = Number(item.quantity) - Number(amount);
      if (quantity >= 0) {
        schema.item.findByIdAndUpdate(req.params.id, { quantity }).then(() => {
          res.json({ message: "Item depleted by " + amount + " items" });
        });
      } else {
        errorHandle("Depleting more than item's quantity", 401, res);
      }
    } else {
      console.log(item);
      errorHandle("Item not found", 404, res);
    }
  } catch (er) {
    errorHandle(er, 500, res);
  }
};
