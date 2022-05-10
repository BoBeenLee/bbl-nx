import { AppProps } from 'next/app';
import React from 'react';
import { GlobalCSS } from '@bbl-nx/styles';
import { NextPage } from 'next';

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
      <GlobalCSS />
      <TargetComponent {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
