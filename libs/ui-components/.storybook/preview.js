import { GlobalCSS, defaultMode } from '@bbl-nx/styles';
import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => (
    <>
      <GlobalCSS />
      <ThemeProvider theme={defaultMode}>
        <Story />
      </ThemeProvider>
    </>
  ),
];
