import cn from 'classnames';
import { teamPortfolios } from '@bbl-nx/constants';
import { ProjectLinks, SectionTitle } from '@bbl-nx/ui-components';
import { deepMemoized } from '@bbl-nx/utils';
import ProjectCard from '../project-card/project-card';

interface TeamPortfoliosProps {
  className?: string;
}

export function TeamPortfolios(props: TeamPortfoliosProps) {
  const { className } = props;
  return (
    <div className={cn(className, 'space-y-8')}>
      <SectionTitle className="pb-2" href="#team">
        Team
      </SectionTitle>
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
    </div>
  );
}

export default TeamPortfolios;
