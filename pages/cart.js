import Head from 'next/head';
import styles from '*.module.scss';

export default function Cart() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cart</title>
        <meta name='description' content='Cart' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
}
