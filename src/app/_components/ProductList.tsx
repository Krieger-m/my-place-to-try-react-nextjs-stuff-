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

export function ProductList({ data }: { data: Product[] }) {
  const [enteredProductName, setEnteredProductName] = useState("");
  const [enteredProductDescription, setEnteredProductDescription] =
    useState("");
  const [enteredProductIsbn, setEnteredProductIsbn] = useState("");
  const [enteredProductPrice, setEnteredProductPrice] = useState("");

  function productNameChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    console.log(event.target.value);
    setEnteredProductName(event.target.value);
  }

  function productDescriptionChangeHandler(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    console.log(event.target.value);
    setEnteredProductDescription(event.target.value);
  }

  function productIsbnChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    console.log(event.target.value);
    setEnteredProductIsbn(event.target.value);
  }

  function productPriceChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    console.log(event.target.value);
    setEnteredProductPrice(event.target.value);
  }

  return (
    <div style={{ border: "2px solid red", borderRadius: 5 }}>
      <NewProduct
        onNameChange={productNameChangeHandler}
        onDescriptionChange={productDescriptionChangeHandler}
        onIsbnChange={productIsbnChangeHandler}
        onPriceChange={productPriceChangeHandler}
      />
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          justifyContent: "center",
        }}
      >
        <Productcard
          productName={enteredProductName}
          productDescription={enteredProductDescription}
          isbn={enteredProductIsbn}
          price={enteredProductPrice}
        />
        {data.map((item: Product, index: number) => (
          <div key={index}>
            <Productcard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
