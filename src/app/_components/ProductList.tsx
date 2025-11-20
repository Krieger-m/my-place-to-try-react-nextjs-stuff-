"use client";

import { SetStateAction, useState } from "react";
import { NewProduct } from "./NewProduct";
import { Productcard } from "./ProductCard";

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
  
  const [productList, setProductList] = useState(data);

  function addProductHandler(productData: ProductProps) {
    setProductList((existingProducts) => [productData, ...existingProducts]);
  }

  return (
    <div
      style={{
        border: "2px solid #ff9100ff",
        borderRadius: 5,
        paddingBottom: 40,
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
