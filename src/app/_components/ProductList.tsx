"use client";

import { SetStateAction, useState } from "react";
import { NewProduct } from "./NewProduct";
import { Productcard } from "./ProductCard";

interface Product {
  productName: string;
  productDescription: string;
  isbn: string;
  price: string;
}

interface ProductListProps {
  data: Product[];
}

export function ProductList({ data,  }: ProductListProps) {
  

  return (
    <div style={{ border: "2px solid red", borderRadius: 5 }}>
      { (
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
          <NewProduct          />
          
        </div>
      )}
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          justifyContent: "center",
        }}
      >
        {data.map((item: Product, index: number) => (
          <div key={index}>
            <Productcard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
