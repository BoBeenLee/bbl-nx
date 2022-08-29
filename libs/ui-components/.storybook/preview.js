import { ThemeProvider } from 'next-themes';
// eslint-disable-next-line import/no-webpack-loader-syntax
import tailwindCss from '!style-loader!css-loader!postcss-loader!./tailwind-imports.css';
import { setImagePrefixPath } from '@bbl-nx/images';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const MY_VIEWPORTS = {
  md: {
    name: 'md-768px',
    styles: {
      width: '768px',
      height: '1080px',
    },
  },
  sm: {
    name: 'sm-640px',
    styles: {
      width: '640px',
      height: '1080px',
    },
  },
};

const STORYBOOK_PREFIX_PATH = process.env.STORYBOOK_PREFIX_PATH;
if (STORYBOOK_PREFIX_PATH) {
  setImagePrefixPath(`${STORYBOOK_PREFIX_PATH}/ui-components`);
}

const storybookStyles = document.createElement('style');
storybookStyles.innerHTML = tailwindCss;
document.body.appendChild(storybookStyles);

export const parameters = {
  layout: 'fullscreen',
  options: {
    storySort: {
      method: 'alphabetical',
      order: [],
      locales: '',
    },
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...MY_VIEWPORTS,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
