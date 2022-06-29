import { companyPortfolios, teamPortfolios } from '@bbl-nx/constants';
import { SectionTitle, Seperator } from '../../atoms';
import ProjectCard from '../../molecules/project-card/project-card';
import LayoutTemplate, {
  LayoutTemplateProps,
} from '../layout-template/layout-template';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProjectTemplateProps
  extends Omit<LayoutTemplateProps, 'children'> {}

export function ProjectTemplate(props: ProjectTemplateProps) {
  const { asPath, onNavigate } = props;

  return (
    <LayoutTemplate asPath={asPath} onNavigate={onNavigate}>
      <div className="flex flex-col items-start w-full max-w-2xl mx-auto mb-8 border-gray-200 sm:mb-12 dark:border-gray-700">
        <div className="w-full space-y-8">
          <SectionTitle className="pb-2" href="#company">
            Company
          </SectionTitle>

          {companyPortfolios.map((item) => {
            const { id, name, period, skills, summary } = item;
            return (
              <ProjectCard
                key={id}
                name={name}
                period={period}
                techStacks={skills}
                summary={summary}
                IconComponent={'icon'}
              />
            );
          })}
          <Seperator />
        </div>
        <div className="w-full mt-16 space-y-8">
          <SectionTitle className="pb-2" href="#company">
            Personal
          </SectionTitle>
          {teamPortfolios.map((item) => {
            const { id, name, period, skills, summary } = item;
            return (
              <ProjectCard
                key={id}
                name={name}
                period={period}
                techStacks={skills}
                summary={summary}
                IconComponent={'icon'}
              />
            );
          })}
          <Seperator />
        </div>
      </div>
    </LayoutTemplate>
  );
}

export default ProjectTemplate;
