import { personalPortforlios } from '@bbl-nx/constants';
import { ProjectCard } from '../../organisms';
import { ProjectLinks } from '@bbl-nx/ui-components';
import { deepMemoized } from '@bbl-nx/utils';

export function PersonalPortfolios() {
  return (
    <>
      {personalPortforlios.map((item) => {
        const {
          id,
          name,
          period,
          skills,
          summary,
          githubUrl,
          homeUrl,
          storybookUrl,
        } = item;
        const links = deepMemoized({
          home: homeUrl,
          github: githubUrl,
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

export default PersonalPortfolios;
