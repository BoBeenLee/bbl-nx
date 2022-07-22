import { teamPortfolios } from '@bbl-nx/constants';
import { ProjectLinks } from '@bbl-nx/ui-components';
import { deepMemoized } from '@bbl-nx/utils';
import ProjectCard from '../project-card/project-card';

export function TeamPortfolios() {
  return (
    <>
      {teamPortfolios.map((item) => {
        const {
          id,
          name,
          period,
          skills,
          summary,
          githubUrl,
          homeUrl,
          googleStoreUrl,
          appStoreUrl,
          storybookUrl,
        } = item;
        const links = deepMemoized({
          home: homeUrl,
          github: githubUrl,
          googleStore: googleStoreUrl,
          appStore: appStoreUrl,
          storybook: storybookUrl,
        });
        return (
          <ProjectCard
            key={id}
            name={name}
            period={period}
            techStacks={skills}
            summary={summary}
            IconComponent={<ProjectLinks url={links} />}
          />
        );
      })}
    </>
  );
}

export default TeamPortfolios;
