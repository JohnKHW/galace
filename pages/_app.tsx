import AppFooter from '@/components/App/AppFooter';
import AppHeader from '@/components/App/AppHeader';
import '@style/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Galace</title>
      </Head>
      <AppHeader />
      <main id="content">
        <Component {...pageProps} />
      </main>
      <AppFooter />
    </>
  );
}

export default MyApp;
