import { GlobalStyle } from '@bbl-nx/styles';
import { DarkModeProvider } from '@bbl-nx/hooks';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <DarkModeProvider initialDarkMode={{}}>
        <Story />
      </DarkModeProvider>
    </>
  ),
];
