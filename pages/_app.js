import { css, Global } from '@emotion/react';
import Head from 'next/head';
import { CartProvider } from 'react-use-cart';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            margin: 0;
          }
        `}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
