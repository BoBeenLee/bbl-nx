import { media } from '@bbl-nx/utils';
import _ from 'lodash';
import styled from 'styled-components';
import {
  ContentTitle,
  SubTitle,
  LineText,
  Seperator,
} from '@bbl-nx/ui-components';
import { activity, ActivityItem } from '@bbl-nx/constants';

/* eslint-disable-next-line */
export interface ActivityProps {}

const StyledActivity = styled.div``;

const StyledSubTitle = styled(SubTitle)`
  padding-bottom: 30px;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 10px;
  margin-bottom: 15px;

  ${media.mobile`
    grid-template-columns: 1fr;
  `};
`;

const Title = styled(ContentTitle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const Content = styled(LineText)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BottomSeparator = styled(Seperator)`
  margin: 40px 0;
`;

export function Activity() {
  const renderItem = (item: ActivityItem) => {
    
    return (
      <Item key={item.name}>
        <Title title={item.name} uri={item.url} />
        <Content>{item.description}</Content>
      </Item>
    );
  };

  return (
    <StyledActivity>
      <StyledSubTitle title="Activity" />
      {_.map(activity, (item) => renderItem(item))}
      <BottomSeparator />
    </StyledActivity>
  );
}

export default Activity;
