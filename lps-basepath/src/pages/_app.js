import Head from 'next/head';
import GlobalStyles from 'styles/global';
import { GTMPageView } from 'services/gtm';
import Router from 'next/router';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

// Router.events.on('routeChangeStart', (url) => {
//   console.log(`Loading: ${url}`);
//   NProgress.start();
// });
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }) {
  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {' '}
      <Head>
        <title>Casa do Saber</title>
        {/* <link rel="stylesheet" type="text/css" href="/nprogress.css" /> */}
        <link rel="shortcut icon" href="/static/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/img/hero.jpg" />
        <meta property="og:image" content="/static/img/hero.jpg"></meta>

        <meta
          property="og:title"
          content="Como se relacionar melhor: Sentimentos e Emoções em tempos de incerteza"
        />
        <meta
          property="og:description"
          content="Participe deste curso totalmente gratuito da Casa do Saber com Christian Dunker"
        ></meta>
        <meta
          name="description"
          content="Participe deste curso totalmente gratuito da Casa do Saber com Christian Dunker"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
