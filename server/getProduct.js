const products = require('../products.json');

const getProduct = (req, res) => {
  let result = products.find(product => product.id === +req.params.id);
  if(!result) {
    return res.status(500).send("Item not on list");
  }
  res.status(200).send(result);
};

module.exports = getProduct;