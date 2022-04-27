import _ from 'lodash';
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import env from 'src/configs/env';

export default class MyDocument extends Document {
  public render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());

 gtag('config', 'UA-114339461-1', { 'optimize_id': 'GTM-M8CNZBG'});      
      `,
            }}
          ></script>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const styledComponentsSheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentsSheet.collectStyles(<App {...props} />),
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styledComponentsSheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    styledComponentsSheet.seal();
  }
};
