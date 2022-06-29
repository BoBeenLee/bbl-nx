import { DarkModeProvider } from '@bbl-nx/hooks';
import './tailwind-imports.css';

export const decorators = [
  (Story) => (
    <DarkModeProvider initialDarkMode={{}}>
      <Story />
    </DarkModeProvider>
  ),
];
