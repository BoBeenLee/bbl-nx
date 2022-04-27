import React, { PureComponent } from 'react';
import styled from 'styled-components';
import theme from 'src/styles/theme';

interface IProps {
  children: React.ReactNode;
}

const Root = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${theme.third};
  line-height: 1.5;
`;

class LineText extends PureComponent<IProps> {
  public render() {
    const { children, ...rest } = this.props;
    return <Root {...rest}>{children}</Root>;
  }
}

export default LineText;
