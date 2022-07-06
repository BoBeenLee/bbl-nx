import { Icon } from '../../atoms';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

export interface DarkModeButtonProps {
  className?: string;
}

export function DarkModeButton(props: DarkModeButtonProps) {
  const { className } = props;
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const onToggle = useCallback(() => {
    if (isDark) {
      setTheme('light');
      return;
    }
    setTheme('dark');
  }, [isDark, setTheme]);

  return mounted ? (
    <button
      aria-label="Toggle Dark Mode"
      className={cn(
        className,
        'w-10 px-3 py-2 mr-[-0.75rem] rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
      )}
      onClick={onToggle}
    >
      <Icon name={isDark ? 'light' : 'night'} />
    </button>
  ) : null;
}

export default DarkModeButton;
