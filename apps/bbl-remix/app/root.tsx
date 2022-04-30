import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  LinksFunction,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import { getMetadata } from './constants/metadata';
import Layout from '@bbl-remix/components/Layout';
import globalStylesUrl from '@bbl-remix/styles/global.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: globalStylesUrl,
    },
  ];
};

export const meta: MetaFunction = (args) => {
  const { data } = args;
  const { title, description, site_url, keywords } = getMetadata(true);
  const metaTitle = title;
  const metaDescription = description;
  const metaUrl = site_url;

  return {
    title,
    description: metaDescription,
    'og:type': 'website',
    'og:title': metaTitle,
    'og:url': metaUrl,
    'og:site_name': 'BoBeenLee',
    'og:description': metaDescription,
    keywords,
    'twitter:card': 'summary',
    'twitter:title': metaTitle,
    'twitter:description': metaDescription,
    'twitter:creator': 'BoBeenLee',
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
