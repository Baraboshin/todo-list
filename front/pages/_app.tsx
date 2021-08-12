import React from 'react';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
