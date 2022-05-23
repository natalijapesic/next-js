import { AppProps } from 'next/app';
import Head from 'next/head';
import '../../../libs/style/main.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>{/* <title>Welcome to social-network!</title> */}</Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
