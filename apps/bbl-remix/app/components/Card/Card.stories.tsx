import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { GithubCard, PortfolioCard, PostCard } from "@bbl-remix/components/Card";

const Root = styled.div`
  display: grid;
  grid-auto-columns: 50px;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
`;

const Child = styled.div`
  margin-top: 30px;
  grid-column: 2;
  grid-row: 1;
`;

storiesOf("Card", module)
  .addDecorator(getStory => <Root>{getStory()}</Root>)
  .add("GithubCard", () => (
    <Child>
      <GithubCard />
    </Child>
  ))
  .add("PortfolioCard", () => (
    <Child>
      <PortfolioCard
        portfolioImages={[]}
        githubUrl="https://github.com/BoBeenLee/map"
        linkUrl="https://play.google.com/store/apps/details?id=com.nexters.intersection.intersectionapp"
      />
    </Child>
  ))
  .add("PostCard", () => (
    <Child>
      <PostCard />
    </Child>
  ));
