import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Layout from '.';
import '../../../libs/style/main.css';
import { store } from '../lib/stores/store';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <>
        <main className="dark min-w-screen min-h-screen bg-gray-900 text-gray-300 font-mono">
          <Layout />
          <Component {...pageProps} />
        </main>
      </>
    </Provider>
  );
}

export default CustomApp;
