import { isBrowser } from '@bbl-nx/utils';
import { useEffect, useState } from 'react';
import { ModeType } from 'styled-components';

export function useDarkMode(): [ModeType, () => void, boolean] {
  const [theme, setTheme] = useState<ModeType>('light');
  const [componentMounted, setComponentMounted] = useState(false);
  const setMode = (mode: ModeType) => {
    isBrowser && window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    if (!isBrowser) {
      return;
    }
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localTheme
      ? setMode('dark')
      : localTheme
      ? setTheme(localTheme as ModeType)
      : setMode('light');
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
