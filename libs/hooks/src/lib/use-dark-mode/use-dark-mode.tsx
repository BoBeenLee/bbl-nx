import { defaultMode } from '@bbl-nx/styles';
import React, { useContext, useMemo } from 'react';
import { useEffect, useState } from 'react';
import { ThemeProvider, ModeType } from 'styled-components';

interface DarkModeState {
  mode: ModeType;
}

const DarkModeProviderContext = React.createContext<DarkModeState>({
  mode: 'light',
});

export function DarkModeProvider({
  initialDarkMode,
  children,
}: {
  initialDarkMode: { mode?: ModeType };
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState<DarkModeState>({ mode: 'light' });

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDarkMode({
        mode: 'dark',
      });
      return;
    }
    if (initialDarkMode?.mode) {
      setDarkMode({
        mode: initialDarkMode.mode
      });
      return;
    }
    setDarkMode({
      mode: 'light',
    });
  }, [initialDarkMode]);

  const theme = useMemo(() => {
    return { ...defaultMode, mode: darkMode.mode ?? defaultMode.mode };
  }, [darkMode.mode]);

  return (
    <DarkModeProviderContext.Provider value={darkMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkModeProviderContext.Provider>
  );
}

export function useDarkMode() {
  const darkMode = useContext(DarkModeProviderContext);
  return darkMode;
}
