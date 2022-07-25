import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { LinksFunction, MetaFunction } from '@remix-run/react/routeModules';
import { metadataItem } from '@bbl-nx/constants';
import globalStylesUrl from './styles/global.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: globalStylesUrl,
    },
  ];
};

export const meta: MetaFunction = (args) => {
  const { title, description, url, keywords } = metadataItem;
  const metaTitle = title;
  const metaDescription = description;
  const metaUrl = url;

  return {
    title,
    description: metaDescription,
    'og:type': 'website',
    'og:title': metaTitle,
    'og:url': metaUrl,
    'og:site_name': metaTitle,
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
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
