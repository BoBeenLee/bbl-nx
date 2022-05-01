import { useCallback } from 'react';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import styled from 'styled-components';
import { DATE_TIME_FORMAT4, isBrowser, parseDateTime } from '@bbl-nx/utils';

/* eslint-disable-next-line */
export interface GithubCardProps {
  name: string;
  description: string;
  date: string;
  url: string;
}

const StyledGithubCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
    opacity: 0.5;
  }
`;

const Name = styled.div`
  grid-column: 1/3;
  grid-row: 1;
`;

const Date = styled.div`
  grid-column: 3;
  grid-row: 1;
`;

const Description = styled.div`
  grid-column: 1/4;
  grid-row: 2;
`;

export function GithubCard(props: GithubCardProps) {
  const { url, name, description, date } = props;

  const onGithubClick = useCallback(() => {
    if (isBrowser) {
      window.open(url, '_blank');
    }
  }, [url]);

  return (
    <StyledGithubCard onClick={onGithubClick}>
      <Name>{name}</Name>
      <Date>
        {distanceInWordsToNow(parseDateTime(date, DATE_TIME_FORMAT4).valueOf())}
      </Date>
      <Description>{description}</Description>
    </StyledGithubCard>
  );
}

GithubCard.defaultProps = {
  date: '2021-12-19',
  description: 'blog & homepage project based on Nextjs',
  name: 'bbl',
  url: 'https://github.com/BoBeenLee/bbl',
};

export default GithubCard;
