import Document, { Head, Html, Main, NextScript } from 'next/document';
import getConfig from 'next/config';

const { BASE_PATH } = getConfig().publicRuntimeConfig;
// _document.tsx will only run on server side, interactive event like onClick will not work in here.
class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link href={`${BASE_PATH}/favicon.ico`} rel="shortcut icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
