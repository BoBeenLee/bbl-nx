import cn from 'classnames';
import { companyPortfolios } from '@bbl-nx/constants';
import { ProjectCard } from '../../organisms';
import { ProjectLinks, SectionTitle } from '@bbl-nx/ui-components';
import { deepMemoized } from '@bbl-nx/utils';

interface CompanyPortfoliosProps {
  className?: string;
}

export function CompanyPortfolios(props: CompanyPortfoliosProps) {
  const { className } = props;
  return (
    <div className={cn(className, 'space-y-8')}>
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
        const links = deepMemoized({
          home: homeUrl,
          link: linkUrl,
          github: githubUrl,
          googleStore: googleStoreUrl,
          appStore: appStoreUrl,
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

export default CompanyPortfolios;
