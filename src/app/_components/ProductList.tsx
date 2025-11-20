"use client";

import { SetStateAction, Suspense, useEffect, useState } from "react";
import { NewProduct } from "./NewProduct";
import { Productcard } from "./ProductCard";
import { getProducts } from "../data/getProducts";

interface ProductProps {
  productName: string;
  productDescription: string;
  isbn: string;
  price: string;
}

interface ProductListProps {
  data: ProductProps[];
}

export function ProductList({ data }: ProductListProps) {
  // console.log('data: ');
  // console.log(data);

  const [productList, setProductList] = useState(data);
  // console.log('productList: ');
  // console.log(productList);
  const [isFetching, setIsFetching] = useState(false);

  // fetching data inside the client component using useEffect
  useEffect(() => {
    async function fetchProducts() {
      setIsFetching(true);
      const res = await fetch("http://localhost:8088/products");
      const productData = await res.json();
      setProductList(productData.storedProducts);
      setIsFetching(false);
    }
    fetchProducts();
  }, []);

  function addProductHandler(productData: ProductProps) {
    // using fetch to do a post request
    fetch("http://localhost:8088/products", {
      // defining the fetch options
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setProductList((existingProducts) => [productData, ...existingProducts]);
  }

  return (
    <div
      style={{
        border: "2px solid #ff9100ff",
        borderRadius: 5,
        padding: 40,
      }}
    >
      {
        <div
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <NewProduct onAddProduct={addProductHandler} />
        </div>
      }
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          justifyContent: "center",
        }}
      >
        {!isFetching &&
          productList.length > 0 &&
          productList.map((item: ProductProps, index: number) => (
            <div key={index}>
              <Productcard {...item} />
            </div>
          ))}
        {isFetching && (
          <div
            style={{
              backgroundColor: "#f7ab39",
              padding: "1rem",
              width: "20rem",
              margin: "2rem auto",
              borderRadius: 6,
              boxShadow: "0 2px 8px #ffffffff",
            }}
          >
            <h2>Fetching the Products ...</h2>
          </div>
        )}
        {!isFetching && productList.length <= 0 && (
          <div
            style={{
              backgroundColor: "#f7ab39",
              padding: "1rem",
              width: "20rem",
              margin: "2rem auto",
              borderRadius: 6,
              boxShadow: "0 2px 8px #ffffffff",
            }}
          >
            <h2>No Products :(</h2>
            <p>start adding some!</p>
          </div>
        )}
      </div>
    </div>
  );
}
