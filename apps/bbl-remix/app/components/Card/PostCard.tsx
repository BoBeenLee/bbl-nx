import { format } from "date-fns";
import React, { PureComponent } from "react";
import { GoBook as GoBookIcon } from "react-icons/go";
import styled, { css } from "styled-components";
import { media } from "~/utils/media";

import { Seperator } from "~/components/Seperator";
import { SubTitle } from "~/components/Title";
import theme from "~/styles/theme";
import { toDateTimeText } from "~/utils/datetime";

interface IProps {
  title: string;
  date: string;
  url?: string;
  linkUrl?: string;
}

const Root = styled.div`
  display: grid;
  grid-template-areas:
    "title date"
    "link link"
    "separator separator";
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

const TitleBox = styled(SubTitle)`
  grid-area: title;
  font-size: 30px;
  line-height: 40px;
  text-align: left;
`;

const BookIcon = styled(GoBookIcon)`
  padding-left: 5px;
  padding-bottom: 3px;
`;

const DateBox = styled.div`
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

const UrlBox = styled.div`
  grid-area: link;
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

const AniLinkABox = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 26px;
`;

const BottomSeparator = styled(Seperator)`
  grid-area: separator;
  margin: 40px 0px;
`;

class PostCard extends PureComponent<IProps> {
  public static defaultProps = {
    date: String(new Date().valueOf()),
    linkUrl: "",
    title: "Hello World",
    url: ""
  };

  public render() {
    const { title, date, url, linkUrl } = this.props;
    return (
      <Root>
        <TitleBox title={title} />
        <DateBox>{toDateTimeText(date, "MMMM D, YYYY")}</DateBox>
        {url && (
          <UrlBox>
            <AniLinkABox href={url}>
              View Article
              <BookIcon size={25} />
            </AniLinkABox>
          </UrlBox>
        )}
        {linkUrl && (
          <UrlBox>
            <ArticleLink href={linkUrl} target="_blank">
              View Article
              <BookIcon size={25} />
            </ArticleLink>
          </UrlBox>
        )}
        <BottomSeparator />
      </Root>
    );
  }
}

export default PostCard;
