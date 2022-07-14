import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 12
import { ThemeProvider } from 'next-themes';
import '../src/styles/styles.css';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
