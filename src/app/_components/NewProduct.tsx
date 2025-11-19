"use client";

import { NodeEventTarget } from "events";
import { ChangeEventHandler, useState } from "react";

export function NewProduct(props: {
  onNameChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  onIsbnChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onPriceChange: ChangeEventHandler<HTMLInputElement> | undefined;
}) {
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

  // handlers

  return (
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
          onChange={props.onNameChange}
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
          onChange={props.onDescriptionChange}
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
          onChange={props.onIsbnChange}
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
          onChange={props.onPriceChange}
        />
      </p>
    </form>
  );
}
