import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { PhotoGallery } from "~/components/Gallery";
import { media } from "~/utils/media";
import theme from "~/styles/theme";

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  color: ${theme.primary};
`;

const Child = styled.div`
  grid-column: 2/3;
  grid-row: 1;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 960px;

  ${media.mobile`
    grid-column: 1/4;
  `};
`;

storiesOf("PhotoGallery", module)
  .addDecorator(getStory => <Root>{getStory()}</Root>)
  .add("PhotoGallery", () => (
    <Child>
      <PhotoGallery />
    </Child>
  ));
