import _ from "lodash";
import React, { PureComponent } from "react";
import { DiAndroid, DiApple } from "react-icons/di";
import { GoLink as LinkIcon, GoMarkGithub as GithubIcon } from "react-icons/go";

import styled from "styled-components";
import { skillMap } from "~/constants/skill";
import { media } from "~/utils/media";
import PhotoGallery from "~/components/Gallery/PhotoGallery";
import Seperator from "~/components/Seperator/Seperator";
import theme from "~/styles/theme";
import images from "~/images";

interface IProps {
  name: string;
  period: string;
  skills: string[];
  summary: string;
  portfolioImages?: string[];
  githubUrl?: string;
  linkUrl?: string;
  storybookUrl?: string;
  googleStoreUrl?: string;
  appStoreUrl?: string;
  onImagePopup: (render: any) => void;
}

const Root = styled.div`
  display: grid;
  grid-template-columns: auto 2fr 1fr;
  color: ${theme.primary};
`;

const NameBox = styled.a`
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

const PeriodBox = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  color: ${theme.third};
`;

const LinkBox = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const IconBox = styled.a`
  margin-left: 10px;
  color: ${theme.primary};
  text-decoration: none;
  &:hover {
    color: ${theme.secondary};
  }
`;

const SkillsBox = styled.div`
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

const SummaryBox = styled.div`
  grid-column: 1/4;
  grid-row: 3;
  padding-left: 10px;
  font-size: 12px;
  color: ${theme.third};
`;

const PhotoGalleryBox = styled.div`
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

class PortfolioCard extends PureComponent<IProps> {
  // tslint:disable:object-literal-sort-keys
  public static defaultProps = {
    name: "flass",
    period: "2016-01 ~ 2017-01",
    skills: [
      "ReactJS",
      "React-Router",
      "Mocha",
      "Redux",
      "Material UI",
      "Webpack",
      "Sass",
      "Rails"
    ],
    summary: "INTRO",
    images: _.times(5, () => {
      return "https://images.unsplash.com/photo-1471101173712-b9884175254e?dpr=2&auto=format&w=256&h=256";
    }),
    githubUrl: "",
    linkUrl: "",
    onImagePopup: _.identity
  };

  public render() {
    const {
      name,
      period,
      skills,
      summary,
      githubUrl,
      linkUrl,
      storybookUrl,
      googleStoreUrl,
      appStoreUrl,
      portfolioImages,
      onImagePopup
    } = this.props;
    return (
      <Root>
        <NameBox href={`#${name}`} id={name}>
          {name}
        </NameBox>
        <PeriodBox>{period}</PeriodBox>
        <LinkBox>
          {googleStoreUrl && (
            <IconBox href={googleStoreUrl} target="_blank">
              <DiAndroid size={20} />
            </IconBox>
          )}
          {appStoreUrl && (
            <IconBox href={appStoreUrl} target="_blank">
              <DiApple size={20} />
            </IconBox>
          )}
          {githubUrl && (
            <IconBox href={githubUrl} target="_blank">
              <GithubIcon size={20} />
            </IconBox>
          )}
          {storybookUrl && (
            <IconBox href={storybookUrl} target="_blank">
              <StorybookIcon src={images.storybook} />
            </IconBox>
          )}
          {linkUrl && (
            <IconBox href={linkUrl} target="_blank">
              <LinkIcon size={20} />
            </IconBox>
          )}
        </LinkBox>
        <SkillsBox>{_.map(skills, this.renderSkillItem)}</SkillsBox>
        <SummaryBox>{summary}</SummaryBox>
        <PhotoGalleryBox>
          <PhotoGallery images={portfolioImages} onImagePopup={onImagePopup} />
        </PhotoGalleryBox>
        <BottomSeparator />
      </Root>
    );
  }

  private renderSkillItem = (skillName: string, index: number) => {
    const uri = skillMap[_.replace(skillName, / /g, "_").toUpperCase()]?.uri;
    if (!_.isEmpty(uri)) {
      return (
        <SkillLinkItem key={index} href={uri} target="_blank">
          {skillName}
        </SkillLinkItem>
      );
    }
    return <SkillItem key={index}>{skillName}</SkillItem>;
  };
}

export default PortfolioCard;
