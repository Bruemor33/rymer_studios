import Head from 'next/head';
import styles from '*.module.scss';

export default function Design() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Design Portfolio</title>
        <meta name='description' content='Design Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Our Design Offerings</h1>
      </main>
    </div>
  );
}
