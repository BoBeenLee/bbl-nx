import { theme } from '@nx-bbl/styles';
import styled from 'styled-components';

/* eslint-disable-next-line */
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

SubTitle.defaultProps = {
  title: 'Hello World',
};

export default SubTitle;
