import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";

import Avatar from "@bbl-remix/components/Avatar/Avatar";

const Root = styled.div`
  display: grid;
  grid-auto-columns: 50px;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
`;

const Child = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

storiesOf("Avatar", module)
  .addDecorator(getStory => <Root>{getStory()}</Root>)
  .add("Avatar", () => (
    <Child>
      <Avatar onPress={action("clicked")} />
    </Child>
  ));
