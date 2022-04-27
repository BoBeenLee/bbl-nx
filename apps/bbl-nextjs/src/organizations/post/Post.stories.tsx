import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { Caption } from 'src/organizations/post';

const Root = styled.div`
  display: grid;
  grid-auto-columns: 50px;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
`;

const Child = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

storiesOf('Organization Post', module)
  .addDecorator((getStory) => <Root>{getStory()}</Root>)
  .add('Caption', () => (
    <Child>
      <Caption url="" title="test" description="testtest" />
    </Child>
  ));
