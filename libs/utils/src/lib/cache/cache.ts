type CacheReturn<Fn extends AsyncFunction> = ((
  ...args: Parameters<Fn>
) => Promise<Awaited<ReturnType<Fn>>>) & {
  invalidate: (...args: Parameters<Fn>) => void;
};

export function cache<Fn extends AsyncFunction>(
  fn: Fn,
  getKey: (...args: Parameters<Fn>) => string
): CacheReturn<Fn> {
  const cache: Record<string, Awaited<ReturnType<Fn>>> = {};

  const retFn = async (
    ...args: Parameters<Fn>
  ): Promise<Awaited<ReturnType<Fn>>> => {
    const key = getKey(...args);
    const cachedItem = cache[key];
    if (!cachedItem) {
      return (cache[key] = await fn(...args));
    }
    return cachedItem;
  };

  retFn.invalidate = (...args: Parameters<Fn>) => {
    delete cache[getKey(...args)];
  };
  return retFn;
}
