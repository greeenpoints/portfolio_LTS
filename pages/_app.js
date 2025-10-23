import '../styles/globals.scss';
import Page from '../components/Page';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-YSX5R91XDE"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YSX5R91XDE');
          `,
        }}
      />
    </Page>
  );
}

export default MyApp;
