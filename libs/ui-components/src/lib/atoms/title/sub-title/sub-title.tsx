import { getThemeProps } from '@bbl-nx/styles';
import styled from 'styled-components';

export interface SubTitleProps {
  title: string;
}

const StyledSubTitle = styled.div`
  font-size: 30px;
  font-weight: 400;
  color: ${getThemeProps("third")};
`;

export function SubTitle(props: SubTitleProps) {
  const { title, ...rest } = props;
  return <StyledSubTitle {...rest}>{title}</StyledSubTitle>;
}

export default SubTitle;
