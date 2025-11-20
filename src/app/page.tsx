"use cache";
import Image from "next/image";
import styles from "./page.module.css";
import { cacheLife } from "next/cache";

export default async function Home() {
  
  cacheLife("days");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>Home</h3>
      </main>
    </div>
  );
}
