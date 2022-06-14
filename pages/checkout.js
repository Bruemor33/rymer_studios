import Head from 'next/head';
import styles from '*.module.scss';

export default function Checkout() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Checkout</title>
        <meta name='description' content='Checkout' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Checkout</h1>
      </main>
    </div>
  );
}
