const fs = require('node:fs/promises');

async function getStoredProducts() {
  const rawFileContent = await fs.readFile('products.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedProducts = data.products ?? [];
  console.log(storedProducts)
  return storedProducts;
}

function storeProducts(products) {
  return fs.writeFile('products.json', JSON.stringify({ products: products || [] }));
}

exports.getStoredProducts = getStoredProducts;
exports.storeProducts = storeProducts;