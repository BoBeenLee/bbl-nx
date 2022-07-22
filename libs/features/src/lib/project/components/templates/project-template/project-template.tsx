import { personalPortforlios, teamPortfolios } from '@bbl-nx/constants';
import {
  CompanyPortfolios,
  PersonalPortfolios,
  ProjectCard,
} from '../../organisms';
import { SectionTitle, Seperator, ProjectLinks } from '@bbl-nx/ui-components';
import { deepMemoized } from '@bbl-nx/utils';

export function ProjectTemplate() {
  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto mb-8 border-gray-200 sm:mb-12 dark:border-gray-700">
      <div className="w-full space-y-8">
        <SectionTitle className="pb-2" href="#company">
          Company
        </SectionTitle>
        <CompanyPortfolios />
        <Seperator />
      </div>
      <div className="w-full mt-16 space-y-8">
        <SectionTitle className="pb-2" href="#company">
          Personal
        </SectionTitle>
        <PersonalPortfolios />
        <Seperator />
      </div>
      <div className="w-full mt-16 space-y-8">
        <SectionTitle className="pb-2" href="#company">
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
    </div>
  );
}

export default ProjectTemplate;
