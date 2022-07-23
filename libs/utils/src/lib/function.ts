export const once = <R>(func: (...rest: unknown[]) => R) => {
    let isCalled = false,
      result: R | null = null;
    return (...rest: unknown[]): R => {
      if (isCalled) {
        return result as R;
      }
      isCalled = true;
      result = func(...rest);
      return result;
    };
  };