import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 12
import { ThemeProvider } from 'next-themes';
import { worker } from '../mocks/browser';
import '../src/styles/styles.css';

worker.start();

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
