const products = require('../products.json');

const getProducts = (req, res) => {
    let itemPrice = req.query.price;
    if(itemPrice) {
        let yourProduct = products.filter(product => product.price >= parseInt(itemPrice))
            if(yourProduct.length === 0 || yourProduct == undefined) {
                res.status(404).send("No items match your request")
            } else {
                res.status(200).send(yourProduct);
            }
    } else {
        res.status(200).send(products);
    }
};

module.exports = getProducts;