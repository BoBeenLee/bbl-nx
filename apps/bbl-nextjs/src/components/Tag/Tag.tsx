import React, { PureComponent } from 'react';
import styled from 'styled-components';

interface IProps {
  name: string;
}

const Root = styled.div``;

class Tag extends PureComponent<IProps> {
  public static defaultProps = {
    name: 'Nexters',
  };
  public render() {
    const { name, ...rest } = this.props;
    return <Root {...rest}>{name}</Root>;
  }
}

export default Tag;
