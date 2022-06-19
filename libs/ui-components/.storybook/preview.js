import { GlobalCSS, defaultMode } from '@bbl-nx/styles';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from "@bbl-nx/hooks";

function ThemeWrapper(props) {
  const [theme] = useDarkMode();
  return (
    <ThemeProvider theme={{ ...defaultMode, theme }}>
      {props.children}
    </ThemeProvider>
  );
}


export const decorators = [
  (Story) => (
    <>
      <GlobalCSS />
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    </>
  ),
];
