import {
  ContentTitle,
  LineText,
  Seperator,
  SubTitle,
} from '@bbl-nx/ui-components';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface EducationProps {}

const StyledEducation = styled.div``;

const Item = styled.div`
  padding-top: 30px;
  padding-left: 10px;
`;

const Title = styled(ContentTitle)`
  margin-bottom: 5px;
`;

const BottomSeparator = styled(Seperator)`
  margin: 40px 0;
`;

export function Education(props: EducationProps) {
  return (
    <StyledEducation>
      <SubTitle title="Education" />
      <Item>
        <Title
          title="Sungkonghoe University"
          uri="http://www.skhu.ac.kr/main.aspx"
        />
        <LineText>Software Engineering / 2010.3 - 2015.8</LineText>
      </Item>
      <BottomSeparator />
    </StyledEducation>
  );
}

export default Education;
