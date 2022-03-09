import React from "react";
import styled from "styled-components";
import { Seperator } from "src/components/Seperator";
import { LineText } from "src/components/Text";
import { ContentTitle, SubTitle } from "src/components/Title";

const Root = styled.div``;

const ItemBox = styled.div`
  padding-top: 30px;
  padding-left: 10px;
`;

const TitleBox = styled(ContentTitle)`
  margin-bottom: 5px;
`;

const BottomSeparator = styled(Seperator)`
  margin: 40px 0;
`;

function Education() {
  return (
    <Root>
      <SubTitle title="Education" />
      <ItemBox>
        <TitleBox
          title="Sungkonghoe University"
          uri="http://www.skhu.ac.kr/main.aspx"
        />
        <LineText>Software Engineering / 2010.3 - 2015.8</LineText>
      </ItemBox>
      <BottomSeparator />
    </Root>
  );
}

export default Education;
