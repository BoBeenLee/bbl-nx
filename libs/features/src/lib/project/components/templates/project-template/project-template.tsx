import {
  CompanyPortfolios,
  PersonalPortfolios,
  TeamPortfolios,
} from '../../organisms';
import { SectionTitle, Seperator } from '@bbl-nx/ui-components';

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
        <TeamPortfolios />
      </div>
    </div>
  );
}

export default ProjectTemplate;
