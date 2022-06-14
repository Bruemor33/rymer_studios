import Head from 'next/head';
import styles from '*.module.scss';

export default function Art() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Art Portfolio</title>
        <meta name='description' content='Art Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
}
