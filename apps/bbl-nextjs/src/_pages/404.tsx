import Layout from '../components/layout';
import React from 'react';
import { PageTitle } from '@bbl-nx/ui-components';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full max-w-2xl py-12 mx-auto sm:py-20 sm:mb-16">
        <PageTitle>Something went Wrong.</PageTitle>
        <div className="mb-8 text-gray-600 dark:text-gray-400">
          {`I'm guessing you spelled something wrong. Can you double check
          that URL?`}
        </div>
        <Link className="w-64 p-1 mx-auto font-bold text-center text-black bg-gray-200 rounded-md sm:p-4 dark:bg-gray-800 dark:text-white" href="/">
          Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
