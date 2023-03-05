import { AppProps, NextWebVitalsMetric } from 'next/app';
import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { isMobile, isSafari } from '@bbl-nx/utils';
import { env } from '../libs/env';
import { sendToGTagWebVitals } from "../libs/gtag";
import '../styles/styles.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type Props = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = (props: Props) => {
  const { Component, pageProps } = props;
  const TargetComponent = Component;
  const router = useRouter();

  useEffect(() => {
    const handleScrollTop = () => {
      if (isSafari() && isMobile()) {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 0);
      }
    };
    router.events.on('routeChangeComplete', handleScrollTop);
    return () => {
      router.events.off('routeChangeComplete', handleScrollTop);
    };
  }, [router.events]);

  return (
    <React.Fragment>
      <ThemeProvider attribute="class">
        <Head>
          <title>{'BoBeen Lee'}</title>
        </Head>
        <TargetComponent {...pageProps} />
      </ThemeProvider>
      <Script
        strategy={'afterInteractive'}
        src={`https://www.googletagmanager.com/gtag/js?id=${env.GTM_ID}`}
      />
      <Script
        id="gtag"
        strategy={'afterInteractive'}
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${env.GTM_ID}');
      `,
        }}
      />
    </React.Fragment>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  sendToGTagWebVitals({
    category: metric.label,
    name: metric.name,
    delta: metric.value,
    id: metric.id,
  })
}

export default MyApp;
