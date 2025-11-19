'use client';
import Link from "next/link";
import { useState } from "react";

export default function Header(){
    return(
        <>
            <div>
                <h3>Header</h3>
                <Link href={'/'}>Home </Link>
                <span> | </span>
                <Link href={'/products'}> Products</Link>
            </div>
        </>
    )
}