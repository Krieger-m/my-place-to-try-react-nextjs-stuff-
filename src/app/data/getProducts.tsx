import { promises as fs } from "fs";
import { cacheLife } from "next/cache";

export async function getProducts() {
  'use cache'

      // caching experiment
  cacheLife('minutes');

    // dummy backend api
  const res = await fetch("http://localhost:8088/products");
  const productData = await res.json();
  // await new Promise<void>((resolve, reject) => setTimeout(() => resolve(), 1500));

  return await productData;

    // file based backend via faker.json
  // const file = await fs.readFile(process.cwd() + "/public/faker.json", "utf8");
  // const data = JSON.parse(file);
  // return data;
}
