import _ from 'lodash';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import theme from '@bbl-nextjs/styles/theme';

interface IProps {
  className?: string;
  title: string;
  uri: string;
}

const Root = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.primary};
  line-height: 2;
`;

const RootLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.primary};
  text-decoration: none;
  line-height: 2;
  &:hover {
    opacity: 0.7;
  }
`;

class ContentTitle extends PureComponent<IProps> {
  public static defaultProps = {
    title: 'Hello World',
  };
  public render() {
    const { className, title, uri, ...rest } = this.props;
    if (!_.isEmpty(uri)) {
      return (
        <RootLink className={className} href={uri} target="_blank" {...rest}>
          {title}
        </RootLink>
      );
    }
    return (
      <Root className={className} {...rest}>
        {title}
      </Root>
    );
  }
}

export default ContentTitle;
