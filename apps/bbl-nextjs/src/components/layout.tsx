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
        <meta name="robots" content="follow, index" />
        <meta content={metadata.description} name="description" />
        {/* 
        <meta property="og:url" content={`https://bbl-nx.vercel.app${router.asPath}`} />
        <link rel="canonical" href={`https://bbl-nx.vercel.app${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="BoBeen Lee" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
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
