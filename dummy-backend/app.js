const express = require('express');
const bodyParser = require('body-parser');

const { getStoredProducts, storeProducts } = require('./data/products');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/products', async (req, res) => {
  const storedProducts = await getStoredProducts();
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
  res.json({ storedProducts });
});

app.get('/products/:id', async (req, res) => {
  const storedProducts = await getStoredProducts();
  const product = storedProducts.find((product) => product.id === req.params.id);
  res.json({ product });
});

app.post('/products', async (req, res) => {
  const existingProducts = await getStoredProducts();
  const productData = req.body;
  const newProduct = {
    ...productData,
    id: Math.random().toString(),
  };
  const updatedProducts = [newProduct, ...existingProducts];
  await storeProducts(updatedProducts);
  res.status(201).json({ message: 'Stored new product.', newProduct });
});

app.listen(8088);
