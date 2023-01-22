import { AppProps } from 'next/app';
import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { env } from '../libs/env';
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

export default MyApp;
