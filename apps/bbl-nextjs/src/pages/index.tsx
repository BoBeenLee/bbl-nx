import React from 'react';
import { HomeTemplate } from '@bbl-nx/ui-components';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const HomePage = () => {
  const router = useRouter();

  const onNavigate = useCallback(
    ({ href }: { href: string }) => {
      router.push(href);
    },
    [router]
  );

  return <HomeTemplate asPath={router.asPath} onNavigate={onNavigate} />;
};

export default HomePage;
