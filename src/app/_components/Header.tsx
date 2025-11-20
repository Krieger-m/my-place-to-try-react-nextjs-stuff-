"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  return (
    <>
      <div style={{ padding: 30 }}>
        <h3 style={{ marginBottom: 10 }}>Header</h3>
        <Link href={"/"}>Home </Link>
        <span style={{ color: "#f7ab39" }}> | </span>
        <Link href={"/products"}> Products</Link>
      </div>
    </>
  );
}
