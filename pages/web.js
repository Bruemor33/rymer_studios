import Head from 'next/head';
import styles from '*.module.scss';

export default function Web() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Portfolio</title>
        <meta name='description' content='Web Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Our Web Design and Development Offerings
        </h1>
      </main>
    </div>
  );
}
