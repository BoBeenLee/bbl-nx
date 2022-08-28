import { ThemeProvider } from 'next-themes';
// eslint-disable-next-line import/no-webpack-loader-syntax
import tailwindCss from '!style-loader!css-loader!postcss-loader!./tailwind-imports.css';
import { setImagePrefixPath } from '@bbl-nx/images';

// github pages prefix path 설정
const STORYBOOK_PREFIX_PATH = process.env.STORYBOOK_PREFIX_PATH;
if (STORYBOOK_PREFIX_PATH) {
  setImagePrefixPath(STORYBOOK_PREFIX_PATH);
}

const storybookStyles = document.createElement('style');
storybookStyles.innerHTML = tailwindCss;
document.body.appendChild(storybookStyles);

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
