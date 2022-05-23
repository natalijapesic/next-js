import { AppProps } from 'next/app';
import '../../../libs/style/main.css';
import Header from '../components/header/header';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="dark min-w-screen min-h-screen bg-gray-900 text-gray-300 font-mono">
        <Header></Header>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
