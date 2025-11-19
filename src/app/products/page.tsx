'use cache';
import Image from "next/image";
import styles from "../page.module.css";
import { promises as fs } from "fs";
import { Productcard } from "../_components/ProductCard";
import { cacheLife } from "next/cache";
import { ProductList } from "../_components/ProductList";
import { NewProduct } from "../_components/NewProduct";

async function getProducts(){
  const file = await fs.readFile(process.cwd() + "/public/faker.json", "utf8");
    const data = JSON.parse(file);
return data;

}

export default async function Page() {
  cacheLife({
      stale: 3600, 
      revalidate: 90000, 
      expire: 864000, 
    },);

  

  // console.log(data);

  const products = await getProducts();

  return (
  
    <div className={styles.page}>
      <main className={styles.main}>
        <br />
        <div style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <h1>Products: </h1>
          <button >Add Product</button>
        </div>
        <ProductList data={products}/>
          
            
        
      </main>
    </div>
  );
}


