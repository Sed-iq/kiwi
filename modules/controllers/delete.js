const errorHandle = require("../errorHandle");

const schema = require("../Schema").item;
module.exports = (req, res) => {
  const { id } = req.params;
  schema
    .findByIdAndDelete(id)
    .then((d) => {
      if (d) res.json({ message: "1 item deleted" });
      else errorHandle("This item does not exist", 404, res);
    })
    .catch((err) => errorHandle(err, 404, res));
};
