import styled, { css } from 'styled-components';
import { GoBook as GoBookIcon } from 'react-icons/go';
import { media, toDateTimeText, today } from '@bbl-nx/utils';
import { theme } from '@bbl-nx/styles';
import Seperator from '../../seperator/seperator';
import SubTitle from '../../title/sub-title/sub-title';

export interface PostCardProps {
  title: string;
  url?: string;
  externalUrl?: string;
  createdAt: string;
}

const StyledPostCard = styled.div`
  display: grid;
  grid-template-areas:
    'title date'
    'link link'
    'separator separator';
  grid-template-columns: 1fr 200px;
  grid-column-gap: 20px;
  ${media.mobile`
    grid-template-areas:
    "date"
    "title"
    "link"
    "separator";
    grid-template-columns: 1fr;
    `};
`;

const Title = styled(SubTitle)`
  grid-area: title;
  font-size: 30px;
  line-height: 40px;
  text-align: left;
`;

const BookIcon = styled(GoBookIcon)`
  padding-left: 5px;
`;

const Date = styled.div`
  grid-area: date;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  line-height: 16px;
  font-size: 13px;
  color: ${theme.primary};
  justify-content: flex-end;
  ${media.mobile`
  line-height: 20px;
  margin-bottom: 15px;
    `};
`;

const LinkCSS = css`
  font-size: 13px;
  color: ${theme.secondary};
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }
`;

const Url = styled.div`
  grid-area: link;
  display: flex;
  padding-top: 10px;
  padding-left: 3px;
  a {
    ${LinkCSS}
  }
`;

const ArticleLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 26px;
`;

const AniLinkA = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 26px;
`;

const BottomSeparator = styled(Seperator)`
  grid-area: separator;
  margin: 40px 0px;
`;

export function PostCard(props: PostCardProps) {
  const { title, createdAt, url, externalUrl: linkUrl } = props;
  return (
    <StyledPostCard>
      <Title title={title} />
      <Date>{toDateTimeText(createdAt, 'MMMM D, YYYY')}</Date>
      {url && (
        <Url>
          <AniLinkA href={url}>
            View Article
            <BookIcon size={25} />
          </AniLinkA>
        </Url>
      )}
      {linkUrl && (
        <Url>
          <ArticleLink href={linkUrl} target="_blank">
            View Article
            <BookIcon size={25} />
          </ArticleLink>
        </Url>
      )}
      <BottomSeparator />
    </StyledPostCard>
  );
}

export default PostCard;
