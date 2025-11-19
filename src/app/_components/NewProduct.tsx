"use client";

import { NodeEventTarget } from "events";
import { ChangeEventHandler, useState } from "react";
import { Productcard } from "./ProductCard";

export function NewProduct() {
  //styles
  const labelStyle = {
    display: "block",
    marginBottom: "0.5rem",
    color: "#fff",
    fontWeight: "bold",
  };

  const inputStyle = {
    padding: "0.5em",
    borderRadius: 6,
    marginBottom: "0.5rem",
  };

  const formStyle = {
    backgroundColor: "#5d6e6dff",
    padding: "1rem",
    width: "20rem",
    margin: "2rem auto",
    borderRadius: 6,
    boxShadow: "0 2px 8px #ffffffff",
  };

  // state
  const [enteredProductName, setEnteredProductName] = useState("");
  const [enteredProductDescription, setEnteredProductDescription] =
  useState("");
  const [enteredProductIsbn, setEnteredProductIsbn] = useState("");
  const [enteredProductPrice, setEnteredProductPrice] = useState("");
  
  // handlers
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
    <>
      <form style={formStyle}>
        <p>
          <label style={labelStyle} htmlFor="productName">
            Product name:{" "}
          </label>
          <input
            style={inputStyle}
            type="text"
            id="productName"
            required
            onChange={productNameChangeHandler}
          />
        </p>
        <p>
          <label style={labelStyle} htmlFor="productDescription">
            Product description:{" "}
          </label>
          <textarea
            style={inputStyle}
            id="productDescription"
            required
            rows={6}
            onChange={productDescriptionChangeHandler}
          />
        </p>
        <p>
          <label style={labelStyle} htmlFor="isbn">
            Item no:{" "}
          </label>
          <input
            style={inputStyle}
            type="text"
            id="isbn"
            required
            onChange={productIsbnChangeHandler}
          />
        </p>
        <p>
          <label style={labelStyle} htmlFor="price">
            Price:{" "}
          </label>
          <input
            style={inputStyle}
            type="text"
            id="price"
            required
            onChange={productPriceChangeHandler}
          />
        </p>
      </form>
      <Productcard
            productName={enteredProductName}
            productDescription={enteredProductDescription}
            isbn={enteredProductIsbn}
            price={enteredProductPrice}
          />
    </>
  );
}
