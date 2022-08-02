import { ThemeProvider } from 'next-themes';
// eslint-disable-next-line import/no-webpack-loader-syntax
import tailwindCss from '!style-loader!css-loader!postcss-loader!./tailwind-imports.css';

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
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
