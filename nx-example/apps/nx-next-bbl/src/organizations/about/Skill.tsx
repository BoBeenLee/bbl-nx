import _ from "lodash";
import React, { PureComponent } from "react";
import styled from "styled-components";
import { Seperator } from "src/components/Seperator";
import { LineText } from "src/components/Text";
import { ContentTitle, SubTitle } from "src/components/Title";
import { skills, ISkill } from "src/constants/skill";

const Root = styled.div``;

const SubTitleBox = styled(SubTitle)`
  padding-bottom: 30px;
`;

const ItemBox = styled.div`
  padding-left: 10px;
  margin-bottom: 15px;
`;

const SkillsBox = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SkillItemBox = styled(LineText)`
  margin-right: 10px;
`;

const BottomSeparator = styled(Seperator)`
  margin: 40px 0;
`;

class Skill extends PureComponent {
  public render() {
    return (
      <Root>
        <SubTitleBox title="Skills" />
        {_.map(skills, this.renderItem)}
        <BottomSeparator />
      </Root>
    );
  }

  private renderItem = (item: ISkill) => (
    <ItemBox key={item.name}>
      <ContentTitle title={item.name} uri={item?.uri ?? ""} />
      <SkillsBox>
        {_.map(item.skills, (skill, index) => (
          <SkillItemBox key={index}>{skill}</SkillItemBox>
        ))}
      </SkillsBox>
    </ItemBox>
  );
}

export default Skill;
