import React from "react";
import styled from "styled-components";

import Layout from "~/components/Layout";
import { SubTitle } from "~/components/Title";
import { Caption } from "~/organizations/post";
import { media } from "~/utils/media";
import theme from "~/styles/theme";

interface IProps {
  slug: string;
  html: string;
  title: string;
}

const Root = styled.div`
  padding: 60px 50px 70px 50px;
  line-height: 1.5;

  a {
    color: ${theme.secondary};
  }
  ${media.mobile`
    padding: 30px 10px 40px 10px;
  `}
`;

const SubTitleBox = styled(SubTitle)`
  font-size: 30px;
  margin-bottom: 20px;
  color: ${theme.primary};
  font-weight: bold;
`;

export default function PostTemplate(props: IProps) {
  const { title, html, slug } = props;
  return (
    <Root>
      <SubTitleBox title={title} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Caption
        title={title}
        description={title}
        url={slug}
      />
    </Root>
  );
}
