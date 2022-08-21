import React from 'react';
import { HomeTemplate } from '@bbl-nx/ui-components';
import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import { logoImages } from '@bbl-nx/images';

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <Link rel="preload" as="image" href={logoImages.quokkaPng} />
      </Head>
      <HomeTemplate />
    </Layout>
  );
};

export default HomePage;
