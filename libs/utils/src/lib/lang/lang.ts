export const isEmpty = (obj: unknown): boolean =>
  [Object, Array].includes(
    ((obj || {}) as { constructor: never }).constructor
  ) && !Object.entries((obj || {}) as object).length;
