import {
  companyPortfolios,
  personalPortforlios,
  teamPortfolios,
} from '@bbl-nx/constants';
import { SectionTitle, Seperator } from '../../atoms';
import ProjectCard from '../../molecules/project-card/project-card';
import ProjectLinks from '../../molecules/project-links/project-links';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProjectTemplateProps {}

export function ProjectTemplate() {
  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto mb-8 border-gray-200 sm:mb-12 dark:border-gray-700">
      <div className="w-full space-y-8">
        <SectionTitle className="pb-2" href="#company">
          Company
        </SectionTitle>
        {companyPortfolios.map((item) => {
          const {
            id,
            name,
            period,
            skills,
            summary,
            homeUrl,
            githubUrl,
            linkUrl,
            googleStoreUrl,
            appStoreUrl,
          } = item;
          return (
            <ProjectCard
              key={id}
              name={name}
              period={period}
              techStacks={skills}
              summary={summary}
              IconComponent={
                <ProjectLinks
                  url={{
                    home: homeUrl,
                    link: linkUrl,
                    github: githubUrl,
                    googleStore: googleStoreUrl,
                    appStore: appStoreUrl,
                  }}
                />
              }
            />
          );
        })}
        <Seperator />
      </div>
      <div className="w-full mt-16 space-y-8">
        <SectionTitle className="pb-2" href="#company">
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
          return (
            <ProjectCard
              key={id}
              name={name}
              period={period}
              techStacks={skills}
              summary={summary}
              IconComponent={
                <ProjectLinks
                  url={{
                    home: homeUrl,
                    github: githubUrl,
                    storybook: storybookUrl,
                  }}
                />
              }
            />
          );
        })}
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
          return (
            <ProjectCard
              key={id}
              name={name}
              period={period}
              techStacks={skills}
              summary={summary}
              IconComponent={
                <ProjectLinks
                  url={{
                    home: homeUrl,
                    github: githubUrl,
                    googleStore: googleStoreUrl,
                    appStore: appStoreUrl,
                    storybook: storybookUrl,
                  }}
                />
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectTemplate;
