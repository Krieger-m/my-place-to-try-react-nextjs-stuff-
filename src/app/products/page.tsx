'use cache';
import Image from "next/image";
import styles from "../page.module.css";
import { promises as fs } from "fs";
import { Productcard } from "../_components/ProductCard";
import { cacheLife } from "next/cache";
import { ProductList } from "../_components/ProductList";
import { NewProduct } from "../_components/NewProduct";
import { getProducts } from "../data/getProducts";



export default async function Page() {
  cacheLife({
      stale: 3600, 
      revalidate: 90000, 
      expire: 864000, 
    },);

  

  // console.log(data);

  const products = await getProducts();
  // console.log(products)


  return (
  
    <div className={styles.page}>
      <main className={styles.main}>
        <br />
        <div style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <h1>Products: </h1>
        </div>
        <ProductList data={[...products.storedProducts]} />
          
            
        
      </main>
    </div>
  );
}
