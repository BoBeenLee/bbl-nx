import cn from 'classnames';
import { personalPortforlios } from '@bbl-nx/constants';
import { ProjectCard } from '../../organisms/project-card/project-card';
import { ProjectLinks, SectionTitle } from '@bbl-nx/ui-components';
import { deepMemoized } from '@bbl-nx/utils';

interface PersonalPortfoliosProps {
  className?: string;
}

export function PersonalPortfolios(props: PersonalPortfoliosProps) {
  const { className } = props;
  return (
    <div className={cn(className, 'space-y-8')}>
      <SectionTitle className="pb-2" href="#personal">
        Personal
      </SectionTitle>
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
    </div>
  );
}

export default PersonalPortfolios;
