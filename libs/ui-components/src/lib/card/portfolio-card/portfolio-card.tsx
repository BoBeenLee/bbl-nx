import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { DiAndroid, DiApple } from 'react-icons/di';
import { GoLink as LinkIcon, GoMarkGithub as GithubIcon } from 'react-icons/go';

import { theme } from '@bbl-nx/styles';
import { media } from '@bbl-nx/utils';
import { images } from '@bbl-nx/images';
import Seperator from '../../seperator/seperator';
import PhotoGallery from '../../photo-gallery/photo-gallery';

export interface PortfolioCardProps {
  name: string;
  period: string;
  skills: string[];
  allSkills: Record<string, { uri: string }>;
  summary: string;
  portfolioImages?: string[];
  githubUrl?: string;
  linkUrl?: string;
  storybookUrl?: string;
  googleStoreUrl?: string;
  appStoreUrl?: string;
  onImagePopup: (PopupImage: React.ReactNode) => void;
}

const StyledPortfolioCard = styled.div`
  display: grid;
  grid-template-columns: auto 2fr 1fr;
  color: ${theme.primary};
`;

const Name = styled.a`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  color: ${theme.primary};
  padding-left: 10px;
  margin-right: 15px;
  text-decoration: none;
`;

const Period = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  color: ${theme.third};
`;

const Link = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Icon = styled.a`
  margin-left: 10px;
  color: ${theme.primary};
  text-decoration: none;
  &:hover {
    color: ${theme.secondary};
  }
`;

const Skills = styled.div`
  grid-column: 1/4;
  grid-row: 2;
  font-size: 13px;
  color: ${theme.secondary};
  padding: 15px 0px 10px 10px;
`;

const SkillItem = styled.div`
  display: inline-block;
  color: ${theme.primary};
  line-height: 1.5;
  margin-right: 10px;
  border: 1px solid ${theme.third};
  padding: 4px 8px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const SkillLinkItem = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${theme.primary};
  line-height: 1.5;
  margin-right: 10px;
  border: 1px solid ${theme.third};
  padding: 4px 8px;
  border-radius: 15px;
  margin-bottom: 10px;
  &:hover {
    opacity: 0.7;
  }
`;

const Summary = styled.div`
  grid-column: 1/4;
  grid-row: 3;
  padding-left: 10px;
  font-size: 12px;
  color: ${theme.third};
`;

const PhotoGalleryGroup = styled.div`
  grid-column: 2/3;
  grid-row: 4;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 767px;

  ${media.mobile`
    grid-column: 1/4;
  `};
`;

const BottomSeparator = styled(Seperator)`
  grid-column: 1/5;
  grid-row: 5;
  margin: 40px 0;
`;

const StorybookIcon = styled.img`
  width: 27px;
  height: 27px;
`;

export function PortfolioCard(props: PortfolioCardProps) {
  const {
    name,
    period,
    skills = [],
    allSkills,
    summary,
    githubUrl,
    linkUrl,
    storybookUrl,
    googleStoreUrl,
    appStoreUrl,
    portfolioImages = [],
    onImagePopup,
  } = props;

  const renderSkillItem = (skillName: string, index: number) => {
    const uri = allSkills?.[_.replace(skillName, / /g, '_').toUpperCase()]?.uri;
    if (!uri) {
      return (
        <SkillLinkItem key={index} href={uri} target="_blank">
          {skillName}
        </SkillLinkItem>
      );
    }
    return <SkillItem key={index}>{skillName}</SkillItem>;
  };

  return (
    <StyledPortfolioCard>
      <Name href={`#${name}`} id={name}>
        {name}
      </Name>
      <Period>{period}</Period>
      <Link>
        {googleStoreUrl && (
          <Icon href={googleStoreUrl} target="_blank">
            <DiAndroid size={20} />
          </Icon>
        )}
        {appStoreUrl && (
          <Icon href={appStoreUrl} target="_blank">
            <DiApple size={20} />
          </Icon>
        )}
        {githubUrl && (
          <Icon href={githubUrl} target="_blank">
            <GithubIcon size={20} />
          </Icon>
        )}
        {storybookUrl && (
          <Icon href={storybookUrl} target="_blank">
            <StorybookIcon src={images.storybook} />
          </Icon>
        )}
        {linkUrl && (
          <Icon href={linkUrl} target="_blank">
            <LinkIcon size={20} />
          </Icon>
        )}
      </Link>
      <Skills>{_.map(skills, renderSkillItem)}</Skills>
      <Summary>{summary}</Summary>
      <PhotoGalleryGroup>
        <PhotoGallery images={portfolioImages} onImagePopup={onImagePopup} />
      </PhotoGalleryGroup>
      <BottomSeparator />
    </StyledPortfolioCard>
  );
}

export default PortfolioCard;
