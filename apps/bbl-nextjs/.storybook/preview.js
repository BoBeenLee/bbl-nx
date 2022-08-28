import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 12
import { ThemeProvider } from 'next-themes';
import { worker } from '../mocks/browser';
// eslint-disable-next-line import/no-webpack-loader-syntax
import tailwindCss from '!style-loader!css-loader!postcss-loader!../src/styles/styles.css';
import { setImagePrefixPath } from '@bbl-nx/images';

const STORYBOOK_PREFIX_PATH = process.env.STORYBOOK_PREFIX_PATH;
if (STORYBOOK_PREFIX_PATH) {
  setImagePrefixPath(`${STORYBOOK_PREFIX_PATH}/bbl-nextjs/`);
}

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
