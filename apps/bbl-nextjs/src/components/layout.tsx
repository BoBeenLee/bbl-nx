'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import { LayoutTemplate } from '@bbl-nx/ui-components/templates/layout-template/layout-template';
import { SEO, SEOProps } from '@bbl-nx/ui-components/helpers/seo/seo';

interface LayoutProps {
  seoProps?: Omit<SEOProps, 'asPath'>;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { seoProps, children } = props;
  const pathname = usePathname()

  return (
    <>
      <SEO asPath={pathname} {...seoProps} />
      <LayoutTemplate>{children}</LayoutTemplate>
    </>
  );
}
