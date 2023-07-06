// Stocks items up
const errorHandle = require("../errorHandle");
const schema = require("./../Schema");

module.exports = async (req, res) => {
  try {
    const { amount } = req.body;
    const item = await schema.item.findById(req.params.id);
    if (item) {
      const quantity = Number(amount) + Number(item.quantity);
      schema.item.findByIdAndUpdate(req.params.id, { quantity }).then(() => {
        res.json({ message: "Item stocked by " + amount + " items" });
      });
    } else {
      console.log(item);
      errorHandle("Item not found", 404, res);
    }
  } catch (er) {
    errorHandle(er, 500, res);
  }
};
