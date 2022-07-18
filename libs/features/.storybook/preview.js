import { ThemeProvider } from 'next-themes';
import './tailwind-imports.css';

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
