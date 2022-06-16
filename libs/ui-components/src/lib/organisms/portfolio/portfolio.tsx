import _ from 'lodash';
import { PortfolioItem, skills as allSkills } from '@bbl-nx/constants';
import { SubTitle } from '../../atoms';
import { PortfolioCard } from '../../molecules';
import styled from 'styled-components';

export interface PortfolioProps {
  title: string;
  portfolios: PortfolioItem[];
}

const StyledPortfolio = styled.div``;

const StyledSubTitle = styled(SubTitle)`
  padding-bottom: 20px;
`;

const Content = styled.div`
  padding-top: 20px;
`;

export function Portfolio(props: PortfolioProps) {
  const { title, portfolios } = props;

  const renderPortfolioCard = (portfolio: PortfolioItem) => {
    const {
      id,
      name,
      period,
      skills,
      summary = '',
      githubUrl,
      linkUrl,
      storybookUrl,
      googleStoreUrl,
      appStoreUrl,
      images,
    } = portfolio;

    return (
      <PortfolioCard
        key={id}
        name={name}
        period={period}
        skills={skills}
        allSkills={allSkills}
        summary={summary}
        githubUrl={githubUrl}
        linkUrl={linkUrl}
        storybookUrl={storybookUrl}
        googleStoreUrl={googleStoreUrl}
        appStoreUrl={appStoreUrl}
        portfolioImages={images}
      />
    );
  };

  return (
    <StyledPortfolio>
      <StyledSubTitle title={title} />
      <Content>{_.map(portfolios, renderPortfolioCard)}</Content>
    </StyledPortfolio>
  );
}

export default Portfolio;
