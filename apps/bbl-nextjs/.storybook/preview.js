import { Provider } from 'mobx-react';
import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { getRootStore } from 'src/stores/Store';

import './style.css';

const store = getRootStore();

export const decorators = [
  withKnobs,
  (Story) => (
    <>
      <Provider store={store}>
        <Story />
      </Provider>
    </>
  ),
  (Story) => <Story />,
];
