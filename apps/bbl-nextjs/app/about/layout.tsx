'use client'

import Layout from '../../src/components/layout';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
