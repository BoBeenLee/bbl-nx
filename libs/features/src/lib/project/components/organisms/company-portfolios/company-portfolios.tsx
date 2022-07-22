import { companyPortfolios } from '@bbl-nx/constants';
import { ProjectCard } from '../../organisms';
import { ProjectLinks } from '@bbl-nx/ui-components';
import { deepMemoized } from '@bbl-nx/utils';

export function CompanyPortfolios() {
  return (
    <>
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
    </>
  );
}

export default CompanyPortfolios;
