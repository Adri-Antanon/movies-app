import Head from 'next/head';
import Layout from '../src/components/Layout/Layout';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Movies App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
