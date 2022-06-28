import { GlobalStyle } from '@bbl-nx/styles';
import { DarkModeProvider } from '@bbl-nx/hooks';
import './tailwind-imports.css';

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
