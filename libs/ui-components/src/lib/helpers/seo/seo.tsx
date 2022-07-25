import { metadataItem } from '@bbl-nx/constants';
import Head from 'next/head';

export interface SEOProps extends Partial<typeof metadataItem> {
  asPath: string;
  article?: {
    date: string;
    author: string;
  };
  templateTitle?: string;
}

export function SEO(props: SEOProps) {
  const { asPath } = props;
  const meta = {
    ...metadataItem,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      {/* PWA 용 <link href="/favicons/site.webmanifest" rel="manifest" /> */}
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${asPath}`} />
      <link rel="canonical" href={`${meta.url}${asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={meta.twitter.site} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <meta name="keywords" content={meta.keywords} />
      {meta.article && (
        <>
          <meta property="article:published_time" content={meta.article.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.article.date}
          />
          <meta
            name="author"
            property="article:author"
            content={meta.article.author}
          />
        </>
      )}
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content={'#111827'} />
    </Head>
  );
}

type Favicons = {
  rel: string;
  href: string;
  color?: string;
  sizes?: string;
  type?: string;
};

// you can generate your own from https://www.favicon-generator.org/
const favicons: Array<Favicons> = [
  {
    rel: 'shortcut icon',
    href: '/favicons/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicons/apple-icon-180x180.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicons/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicons/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/favicons/manifest.json',
  },
  {
    color: '#fff',
    href: '/static/favicons/favicon.svg',
    rel: 'mask-icon',
  },
];

export default SEO;
