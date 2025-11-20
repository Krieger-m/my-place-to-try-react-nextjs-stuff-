"use cache";
import Image from "next/image";
import styles from "./page.module.css";
import { cacheLife } from "next/cache";
import projectHeroImg from "../../public/projectHeroImg.png";


export default async function Home() {

  
  cacheLife("days");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>Home</h3>
        <Image
          src={projectHeroImg}
          alt="no alt text"
          height={1036}
          width={1024}
          style={{
            width: '200vw',
            height: '80vh',
            position: 'relative',
            right:0,
            left: '-100%',
          }}
        />
      </main>
    </div>
  );
}
