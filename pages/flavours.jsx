import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

function Flavours() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flavours Fav - King Kong Ice Cream</title>
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
          Flavours!
        </h1>

        <div className={styles.grid}>
          <Link href={"/"}>
            <div className={styles.card}>
              <h3>Home</h3>
              <p>Isn't it wonderful? All the loveliness. All the sparrows.</p>
            </div>
          </Link>
          <div className={styles.card}>
            <h3>Emus</h3>
            <p>
              One can never have enough Emu. Some insist on gravy, but I feel
              that is just watering the aarmadio
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Flavours;
