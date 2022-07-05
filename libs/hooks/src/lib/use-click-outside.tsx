import { useEffect, useRef } from 'react';

export function useClickOutside(
  elRef: React.MutableRefObject<HTMLElement>,
  callback: (e: MouseEvent) => void
) {
  const callbackRef = useRef<(e: MouseEvent) => void>();
  callbackRef.current = callback;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (elRef.current?.contains(e.target as any) && callbackRef.current) {
        callbackRef.current(e);
      }
    };
    // enable capturing
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [callbackRef, elRef]);
}

export default useClickOutside;
