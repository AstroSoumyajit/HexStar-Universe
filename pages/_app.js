import '../styles/globals.css';
import Head from 'next/head';

function MyApp({Component, pageProps}) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
