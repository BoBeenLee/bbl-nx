import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 12
import { ThemeProvider } from 'next-themes';
import { worker } from '../mocks/browser';
// eslint-disable-next-line import/no-webpack-loader-syntax
import tailwindCss from '!style-loader!css-loader!postcss-loader!../src/styles/styles.css';

const storybookStyles = document.createElement('style');
storybookStyles.innerHTML = tailwindCss;
document.body.appendChild(storybookStyles);

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
