// src/pages/_app.js

import '../styles/globals.scss'; // Tu SCSS global existente
import 'swiper/css';


import Layout from '../components/layout/layout';
import { useRouter } from 'next/router';
import { setCookie, getCookie } from 'cookies-next';
import { SedeSelectorProvider } from '../context/SedeSelectorContext';


function MyApp({Component, pageProps}) {
  const {query: { fbclid }} = useRouter();
  const _fbc = getCookie('_fbc');

  if (!_fbc && fbclid) {
    const date = new Date();
    setCookie(
      '_fbc',
      `fb.1.${Date.now()}.${fbclid}`,
      {expires: new Date(date.setDate(date.getDate() + 7))}
    );
  }

  return (
    <SedeSelectorProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SedeSelectorProvider>
  );
}

export default MyApp;