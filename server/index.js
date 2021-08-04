const express = require('express');

const app = express();
const getProducts = require('./getProducts.js');
const getProduct = require('./getProduct.js');

// app.use(express.json());

const port = 5555;

app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);

app.listen(port, (req, res) => {
    console.log("Your server is up and running!")
});

