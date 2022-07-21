export function optional<Fn extends AnyFunction>(
  fn: Fn,
  errorHandler?: (e: unknown) => void
) {
  return function (...args: Parameters<Fn>): ReturnType<Fn> | void {
    try {
      return fn(...args);
    } catch (err) {
      errorHandler?.(err);
    }
  };
}

export const identity = <T>(x: T): T => x;
