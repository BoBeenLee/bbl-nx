import { GlobalCSS } from '@bbl-nx/styles';

export const decorators = [
  (Story) => (
    <>
      <GlobalCSS />
      <Story />
    </>
  ),
];
