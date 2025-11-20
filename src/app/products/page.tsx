// "use cache";
import Image from "next/image";
import styles from "../page.module.css";
import { promises as fs } from "fs";
import { Productcard } from "../_components/ProductCard";
import { cacheLife } from "next/cache";
import { ProductList } from "../_components/ProductList";
import { NewProduct } from "../_components/NewProduct";
import { getProducts } from "../data/getProducts";
import { Suspense } from "react";

export default async function Page() {
  // caching experiment
  // cacheLife({
  //   stale: 30,
  //   revalidate: 60,
  //   expire: 60,
  // });

  // const products = await getProducts();
  // console.log(products)

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenlsy",
          }}
        >
          <h1>Products: </h1>
        </div>
        <Suspense fallback={<p>Loading products...</p>}>
          <ProductList  />
        </Suspense>
      </main>
    </div>
  );
}
