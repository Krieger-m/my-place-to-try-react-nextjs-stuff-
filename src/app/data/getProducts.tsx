import { promises as fs } from "fs";

export async function getProducts() {

    // dummy backend api
  const res = await fetch("http://localhost:8088/products");
  const productData = await res.json();
  return productData;

    // file based backend via faker.json
  // const file = await fs.readFile(process.cwd() + "/public/faker.json", "utf8");
  // const data = JSON.parse(file);
  // return data;
}
