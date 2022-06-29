import { AboutTemplate } from '@bbl-nx/ui-components';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const AboutPage = () => {
  const router = useRouter();

  const onNavigate = useCallback(
    ({ href }: { href: string }) => {
      router.push(href);
    },
    [router]
  );

  return <AboutTemplate asPath={router.asPath} onNavigate={onNavigate} />;
};

export default AboutPage;
