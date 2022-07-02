import { AppProps } from 'next/app';
import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { getMetadata } from '@bbl-nx/constants';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import './styles.css';
import { env } from '../libs/env';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type Props = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = (props: Props) => {
  const { Component, pageProps } = props;
  const TargetComponent = Component;
  const metadata = getMetadata();

  return (
    <React.Fragment>
      <ThemeProvider attribute="class">
        <Head>
          <title>{metadata.title}</title>
          <meta name="theme-color" content={metadata.themeColor} />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"
          />
          <meta name="title" content={metadata.title} />
          <meta name="description" content={metadata.description} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:site_name" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content={metadata.metaImage} />
          <meta name="keywords" content={metadata.keywords} />
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
