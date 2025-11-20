"use client";

import { NodeEventTarget } from "events";
import { ChangeEventHandler, isValidElement, useState } from "react";
import { Productcard } from "./ProductCard";
import addIcon from '../../../public/icons8-add-properties-50.png'
import closeIcon from '../../../public/icons8-close-30.png'
import Image from "next/image";

export function NewProduct(props: { onAddProduct: any }) {
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
    backgroundColor: "#d68931ff",
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

  const [isVisible, setIsVisible] = useState(false);

  // handlers
  function productNameChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    // console.log(event.target.value);
    setEnteredProductName(event.target.value);
  }

  function productDescriptionChangeHandler(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    // console.log(event.target.value);
    setEnteredProductDescription(event.target.value);
  }

  function productIsbnChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    // console.log(event.target.value);
    setEnteredProductIsbn(event.target.value);
  }

  function productPriceChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    // console.log(event.target.value);
    setEnteredProductPrice(event.target.value);
  }

  function isVisibleHandler() {
    setIsVisible(!isVisible);
  }

  function resetState() {
    setEnteredProductDescription("");
    setEnteredProductName("");
    setEnteredProductIsbn("");
    setEnteredProductPrice("");
  }

  function cancelHandler(event: { preventDefault: () => void }) {
    event.preventDefault();
    setIsVisible(false);
    resetState();
  }

  function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();
    const productData = {
      productName: enteredProductName,
      productDescription: enteredProductDescription,
      isbn: enteredProductIsbn,
      price: enteredProductPrice,
    };
    props.onAddProduct(productData);
    console.log("entered product data: ");
    console.log(productData);
    isVisibleHandler();
    resetState();
  }

  return (
    <>
      {isVisible && (
        <>
          <form style={formStyle} onSubmit={submitHandler}>
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
            <p style={inputStyle}>
              <button
                style={{ padding: 10, marginRight: 20 }}
                type="button"
                onClick={cancelHandler}
              >
                Cancel
              </button>
              <button style={{ padding: 10 }} onClick={submitHandler}>
                Submit
              </button>
            </p>
          </form>
          <Productcard
            productName={enteredProductName || "default title"}
            productDescription={
              enteredProductDescription || "default description"
            }
            isbn={enteredProductIsbn || "000-0-000-00000-0"}
            price={enteredProductPrice || "0.0"}
          />
          <div style={{ height: 2, backgroundColor: "#fff" }}></div>
        </>
      )}
      <button style={{ padding: 10 , fontSize: 18,display: 'flex', alignItems: 'center'}} onClick={isVisibleHandler}>
        <Image
          src={isVisible?closeIcon:addIcon}
          alt='no alt text'
          width={15}
          height={15}
          style={{marginRight: 10,}}

        />
        <p>{isVisible ? "Close" : "Add Product"}</p>
      </button>
    </>
  );
}
