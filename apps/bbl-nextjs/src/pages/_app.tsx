import App from 'next/app';
import React from 'react';
import { GlobalCSS } from '@bbl-nx/styles';

class MyApp extends App {
  public render() {
    const { Component } = this.props;
    const { pageProps } = this.props;
    const TargetComponent = Component;

    return (
      <React.Fragment>
        <GlobalCSS />
        <TargetComponent {...pageProps} />
      </React.Fragment>
    );
  }
}

export default MyApp;
