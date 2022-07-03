import React from 'react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { LayoutTemplate } from '@bbl-nx/ui-components';
import Head from 'next/head';
import { getMetadata } from '@bbl-nx/constants';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const metadata = getMetadata();
  const { title = metadata.title, children } = props;
  const router = useRouter();

  const onNavigate = useCallback(
    ({ href }: { href: string }) => {
      router.push(href);
    },
    [router]
  );

  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://leerob.io${router.asPath}`} />
        <link rel="canonical" href={`https://leerob.io${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )} */}
      </Head>
      <LayoutTemplate asPath={router.asPath} onNavigate={onNavigate}>
        {children}
      </LayoutTemplate>
    </>
  );
}
