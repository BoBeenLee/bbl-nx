import React from 'react';
import { useRouter } from 'next/router';
import { LayoutTemplate, SEO, SEOProps } from '@bbl-nx/ui-components';

interface LayoutProps {
  seoProps?: Omit<SEOProps, 'asPath'>;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { seoProps, children } = props;
  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <SEO asPath={asPath} {...seoProps} />
      <LayoutTemplate>{children}</LayoutTemplate>
    </>
  );
}
