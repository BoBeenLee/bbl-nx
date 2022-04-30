import { Provider } from 'mobx-react';
import App from 'next/app';
import React from 'react';

import '@bbl-nextjs/styles/global.css';

class MyApp extends App {
  public render() {
    const { Component } = this.props;
    const { pageProps } = this.props;
    const TargetComponent = Component;

    return (
      <React.Fragment>
        <TargetComponent {...pageProps} />
      </React.Fragment>
    );
  }
}

export default MyApp;
