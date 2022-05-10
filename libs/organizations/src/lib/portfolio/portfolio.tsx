import _ from 'lodash';
import { PortfolioItem, skills as allSkills } from '@bbl-nx/constants';
import { ImagePopup, PortfolioCard, SubTitle } from '@bbl-nx/ui-components';
import styled from 'styled-components';
import React, { useState } from 'react';

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
  const [showModal, setShowModal] = useState(false);
  const [PopupComponent, setPopupComponent] = useState<React.ReactNode>(null);

  const onClose = () => {
    setShowModal(false);
  };

  const onImagePopup = (PopupImage: React.ReactNode) => {
    setShowModal(true);
    setPopupComponent(PopupImage);
  };

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
        onImagePopup={onImagePopup}
      />
    );
  };

  return (
    <StyledPortfolio>
      <StyledSubTitle title={title} />
      <Content>{_.map(portfolios, renderPortfolioCard)}</Content>
      <ImagePopup
        showModal={showModal}
        PopupComponent={PopupComponent}
        onClose={onClose}
      />
    </StyledPortfolio>
  );
}

export default Portfolio;
