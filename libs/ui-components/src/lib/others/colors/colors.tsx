import styled from '@emotion/styled';
import { lightTheme } from '@bbl-nx/styles';
import chroma from "chroma-js";

/* eslint-disable-next-line */
export interface ColorsProps {}

const StyledColors = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColorItem = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: ${({ $bgColor }) => $bgColor};
`;

const ColorText = styled.div<{ $color: string; }>`
  color: ${({ $color }) => $color};
`;


function getKeys<T>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

export function Colors() {
  const themeKeys = getKeys(lightTheme);
  const textColor = chroma.average(Object.values(lightTheme)).hex();
  return (
    <StyledColors>
      {themeKeys.map((themeKey) => {
        return (
          <ColorItem key={themeKey} $bgColor={lightTheme[themeKey]}>
            <ColorText $color={textColor}>{`${themeKey}`}</ColorText>
            <ColorText $color={textColor}>{`${lightTheme[themeKey]}`}</ColorText>
          </ColorItem>
        );
      })}
    </StyledColors>
  );
}

export default Colors;
