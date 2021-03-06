import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>King Kong Ice Cream - We put the Kong in your IC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image
            src="/Ice-Cream-icon.png"
            alt="Ice Cream"
            height={150}
            width={150}
          />
          King Kong Ice Cream
        </h1>

        <p className={styles.description}>
          Get started by typing <code className={styles.code}>kkic start</code>
        </p>

        <div className={styles.grid}>
          <Link href="/flavours">
            <div className={styles.card}>
              <h3>Chocolate Smash &rarr;</h3>
              <p>Our most popular flavour. Refreshed, delivered.</p>
            </div>
          </Link>

          <div className={styles.card}>
            <h3>And the rest... &rarr;</h3>
            <p>All the other bits you need to know about our operation</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
