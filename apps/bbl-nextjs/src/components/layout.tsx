import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { LayoutTemplate, SEO, SEOProps } from '@bbl-nx/ui-components';
import { nav } from '@bbl-nx/constants';
import Head from 'next/head';

interface LayoutProps {
  seoProps?: Omit<SEOProps, 'asPath'>;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { seoProps, children } = props;
  const router = useRouter();
  const { asPath } = router;

  const onNavigate = useCallback(
    ({ href }: { href: string }) => {
      router.push(href);
    },
    [router]
  );

  useEffect(() => {
    window.requestIdleCallback(() => {
      nav.forEach((item) => {
        if (item.href === asPath) {
          return;
        }
        router.prefetch(item.href);
      });
    });
  }, [asPath, router]);

  return (
    <>
      <Head>
        <SEO asPath={asPath} {...seoProps} />
      </Head>
      <LayoutTemplate asPath={asPath} onNavigate={onNavigate}>
        {children}
      </LayoutTemplate>
    </>
  );
}
