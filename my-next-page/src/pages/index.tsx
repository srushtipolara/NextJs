import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let a = "name"

const array = [1,2,3,4,5,6,7,8,9,10]
const reduce = array.reduce((acc, curr, currIndex, arr) => acc+curr, 0);
console.log("reduce",reduce);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h4>Page router</h4>
      </main>
    </>
  );
}
