import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { isBrowser } from '@bbl-nextjs/utils/navigator';

interface IProps {
  name: string;
  description: string;
  date: string;
  url: string;
}

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
    opacity: 0.5;
  }
`;

const NameBox = styled.div`
  grid-column: 1/3;
  grid-row: 1;
`;

const DateBox = styled.div`
  grid-column: 3;
  grid-row: 1;
`;

const DescriptionBox = styled.div`
  grid-column: 1/4;
  grid-row: 2;
`;

class GithubCard extends PureComponent<IProps> {
  public static defaultProps = {
    date: '2021-12-19',
    description: 'blog & homepage project based on Nextjs',
    name: 'bbl',
    url: 'https://github.com/BoBeenLee/bbl',
  };

  public render() {
    const { name, description, date } = this.props;
    return (
      <Root onClick={this.onGithubClick}>
        <NameBox>{name}</NameBox>
        <DateBox>{distanceInWordsToNow(new Date(date))}</DateBox>
        <DescriptionBox>{description}</DescriptionBox>
      </Root>
    );
  }

  private onGithubClick = () => {
    const { url } = this.props;
    if (isBrowser) {
      window.open(url, '_blank');
    }
  };
}

export default GithubCard;
