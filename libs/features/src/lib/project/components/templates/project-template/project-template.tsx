import {
  CompanyPortfolios,
  PersonalPortfolios,
  TeamPortfolios,
} from '../../organisms';
import { Seperator } from '@bbl-nx/ui-components';

export function ProjectTemplate() {
  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto mb-8 border-gray-200 sm:mb-12 dark:border-gray-700">
      <div className="w-full space-y-8">
        <CompanyPortfolios />
        <Seperator />
      </div>
      <div className="w-full mt-16 space-y-8">
        <PersonalPortfolios />
        <Seperator />
      </div>
      <div className="w-full mt-16 space-y-8">
        <TeamPortfolios />
      </div>
    </div>
  );
}

export default ProjectTemplate;
