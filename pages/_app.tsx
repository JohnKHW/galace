import '@style/globals.css';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main id="content">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp
