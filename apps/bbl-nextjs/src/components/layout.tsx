'use client'

import React from 'react';
import { LayoutTemplate } from '@bbl-nx/ui-components/templates/layout-template/layout-template';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <LayoutTemplate>{children}</LayoutTemplate>
    </>
  );
}
