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

    // fetching data inside the client component using useEffect
  useEffect(()=>{
    async function fetchProducts(){
      const res = await fetch("http://localhost:8088/products");
      const productData = await res.json();
      setProductList(productData.storedProducts);
    };
    fetchProducts();
  }, [] );

  
  // console.log('data: ');
  // console.log(data);
  
  const [productList, setProductList] = useState(data);
  
  // console.log('productList: ');
  // console.log(productList);

  function addProductHandler(productData: ProductProps) {
    // using fetch to do a post request 
    fetch('http://localhost:8088/products', {
      // defining the fetch options
      method: 'POST',
      body: JSON.stringify(productData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
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
        {productList.map((item: ProductProps, index: number) => (
          <div key={index}>
            <Productcard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
