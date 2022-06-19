
import { ModeType, DefaultTheme } from "styled-components";
import theme from 'styled-theming';

export interface ThemeProps {
  theme?: typeof defaultMode;
};

export const defaultMode: {
  mode: ModeType;
  size: "large";
} = {
  mode: "light",
  size: "large"
}

export const lightTheme = {
  bgColor: '#fff',
  primary: '#333333',
  secondary: '#0074e5',
  third: '#767676',
  warning: '#EC483F',
  lineColor: '#F1F1F1',
};

export const darkTheme = {
  bgColor: '#fff',
  primary: '#333333',
  secondary: '#0074e5',
  third: '#767676',
  warning: '#EC483F',
  lineColor: '#F1F1F1',
};


const mode = {
  bgColor: theme('mode', {
    light: lightTheme.bgColor,
    dark: darkTheme.bgColor,
  }),
  primary: theme('mode', {
    light: lightTheme.primary,
    dark: darkTheme.primary,
  }),
  secondary: theme('mode', {
    light: lightTheme.secondary,
    dark: darkTheme.secondary,
  }),
  third: theme('mode', {
    light: lightTheme.third,
    dark: darkTheme.third,
  }),
  warning: theme('mode', {
    light: lightTheme.warning,
    dark: darkTheme.warning,
  }),
  lineColor: theme('mode', {
    light: lightTheme.lineColor,
    dark: darkTheme.lineColor,
  }),
};


export const getThemeValueByMode = (mode: ModeType, key: keyof typeof lightTheme) => {
  if (mode === "light") {
    return lightTheme[key];
  }
  return darkTheme[key];
}

export const getThemeProps = (key: keyof typeof mode) => {
  return mode[key];
}