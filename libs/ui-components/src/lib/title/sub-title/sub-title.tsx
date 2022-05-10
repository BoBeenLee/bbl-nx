import { theme } from '@bbl-nx/styles';
import styled from 'styled-components';

export interface SubTitleProps {
  title: string;
}

const StyledSubTitle = styled.div`
  font-size: 30px;
  font-weight: 400;
  color: ${theme.third};
`;

export function SubTitle(props: SubTitleProps) {
  const { title, ...rest } = props;
  return <StyledSubTitle {...rest}>{title}</StyledSubTitle>;
}

export default SubTitle;