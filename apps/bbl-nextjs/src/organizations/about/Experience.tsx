import _ from 'lodash';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Seperator } from 'src/components/Seperator';
import { LineText } from 'src/components/Text';
import { ContentTitle, SubTitle } from 'src/components/Title';
import { media } from 'src/utils/media';
import { experiences, IExperience } from 'src/constants/experience';

const Root = styled.div``;

const SubTitleBox = styled(SubTitle)`
  padding-bottom: 30px;
`;

const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 10px;
  margin-bottom: 15px;

  ${media.mobile`
    grid-template-columns: 1fr;
  `};
`;

const TitleBox = styled(ContentTitle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentBox = styled(LineText)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BottomSeparator = styled(Seperator)`
  margin: 40px 0;
`;

class Experience extends PureComponent {
  public render() {
    return (
      <Root>
        <SubTitleBox title="Experience" />
        {_.map(experiences, (item) => this.renderItem(item))}
        <BottomSeparator />
      </Root>
    );
  }

  private renderItem = (item: IExperience) => (
    <ItemBox key={item.title}>
      <TitleBox title={item.role} uri={item.titleUri} />
      <ContentBox>{`${item.title} / ${item.period}`}</ContentBox>
    </ItemBox>
  );
}

export default Experience;
