import _ from 'lodash';
import { ExperienceItem, experiences } from '@bbl-nx/constants';
import {
  ContentTitle,
  LineText,
  Seperator,
  SubTitle,
} from '@bbl-nx/ui-components';
import { media } from '@bbl-nx/utils';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ExperienceProps {}

const StyledExperience = styled.div``;

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
`;

const Content = styled(LineText)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BottomSeparator = styled(Seperator)`
  margin: 40px 0;
`;

export function Experience(props: ExperienceProps) {
  const renderItem = (item: ExperienceItem) => (
    <Item key={item.title}>
      <Title title={item.role} uri={item.titleUri} />
      <Content>{`${item.title} / ${item.period}`}</Content>
    </Item>
  );
  return (
    <StyledExperience>
      <StyledSubTitle title="Experience" />
      {_.map(experiences, (item) => renderItem(item))}
      <BottomSeparator />
    </StyledExperience>
  );
}

export default Experience;
