import styled from '@emotion/styled';
import { theme } from '@bbl-nx/styles';
import { getKeys } from "@bbl-nx/utils";
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

export function Colors(props: ColorsProps) {
  const themeKeys = getKeys(theme);
  const textColor = chroma.average(Object.values(theme)).hex();
  return (
    <StyledColors>
      {themeKeys.map((themeKey) => {
        return (
          <ColorItem key={themeKey} $bgColor={theme[themeKey]}>
            <ColorText $color={textColor}>{`${themeKey}`}</ColorText>
            <ColorText $color={textColor}>{`${theme[themeKey]}`}</ColorText>
          </ColorItem>
        );
      })}
    </StyledColors>
  );
}

export default Colors;
