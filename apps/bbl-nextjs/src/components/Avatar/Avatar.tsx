import React, { PureComponent } from 'react';
import styled from 'styled-components';

interface IProps {
  alt?: string;
  width?: string;
  src?: any;
  avatarUrl?: string;
  onPress?: () => void;
}

const Root = styled.img`
  border-radius: 50%;
`;

class Avatar extends PureComponent<IProps> {
  public static defaultProps = {
    avatarUrl: 'https://avatars0.githubusercontent.com/u/1489321?v=4',
  };
  public render() {
    const { avatarUrl, ...rest } = this.props;
    return <Root {...rest} src={avatarUrl} />;
  }
}

export default Avatar;
