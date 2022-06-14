import Head from 'next/head';
import styles from '*.module.scss';

export default function Shop() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shop</title>
        <meta name='description' content='Shop' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to our Art Prints Shop!</h1>
      </main>
    </div>
  );
}
