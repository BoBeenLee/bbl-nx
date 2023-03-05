import Head from 'next/head';
import Script from 'next/script';
import { env } from '../src/libs/env';
import { ThemeProvider } from './theme-provider';
import Layout from '../src/components/ui/layout';
import { metadataItem } from '@bbl-nx/constants';

import './globals.css';
import { Metadata } from 'next';
import { favicons } from "@bbl-nx/ui-components/helpers/seo/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, robots, url, siteName, image, twitter, keywords } = metadataItem;
  return {
    title,
    description,
    robots,
    alternates: {
      canonical: url
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: twitter.site,
      creator: '@BoBeenLee',
      images: image,
    },
    keywords,
    themeColor: '#111827',
    icons: {
      icon: favicons,
    },
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    
  };
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="text-white bg-white dark:bg-gray-900 dark:text-black">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
        <Script
          async
          strategy={'afterInteractive'}
          src={`https://www.googletagmanager.com/gtag/js?id=${env.GTM_ID}`}
        />
        <Script
          id="gtag"
          async
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
      </body>
    </html>
  );
}
