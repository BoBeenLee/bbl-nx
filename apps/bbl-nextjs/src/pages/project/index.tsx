import { ProjectTemplate } from '@bbl-nx/ui-components';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const ProjectPage = () => {
  const router = useRouter();

  const onNavigate = useCallback(
    ({ href }: { href: string }) => {
      router.push(href);
    },
    [router]
  );

  return <ProjectTemplate asPath={router.asPath} onNavigate={onNavigate} />;
};

export default ProjectPage;
