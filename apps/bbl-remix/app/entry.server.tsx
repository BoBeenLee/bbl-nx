import { renderToString } from 'react-dom/server';
import { RemixServer, RemixServerProps } from '@remix-run/react';
import { ServerStyleSheet } from 'styled-components';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: Pick<RemixServerProps, 'context'>
) {
  const sheet = new ServerStyleSheet();

  let markup = renderToString(
    sheet.collectStyles(
      <RemixServer context={remixContext as any} url={request.url} />
    )
  );
  const styles = sheet.getStyleTags();
  markup = markup.replace('__STYLES__', styles);

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
