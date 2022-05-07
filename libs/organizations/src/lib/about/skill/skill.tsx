import _ from 'lodash';
import { CategorySkillsItem, categorySkills } from '@bbl-nx/constants';
import {
  ContentTitle,
  LineText,
  Seperator,
  SubTitle,
} from '@bbl-nx/ui-components';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SkillProps {}

const StyledSkill = styled.div``;

const StyledSubTitle = styled(SubTitle)`
  padding-bottom: 30px;
`;

const Item = styled.div`
  padding-left: 10px;
  margin-bottom: 15px;
`;

const SkillGroup = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SkillItem = styled(LineText)`
  margin-right: 10px;
`;

const BottomSeparator = styled(Seperator)`
  margin: 40px 0;
`;

export function Skill(props: SkillProps) {
  const renderItem = (item: CategorySkillsItem) => (
    <Item key={item.name}>
      <ContentTitle title={item.name} uri={item?.uri ?? ''} />
      <SkillGroup>
        {_.map(item.skills, (skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </SkillGroup>
    </Item>
  );

  return (
    <StyledSkill>
      <StyledSubTitle title="Skills" />
      {_.map(categorySkills, renderItem)}
      <BottomSeparator />
    </StyledSkill>
  );
}

export default Skill;
