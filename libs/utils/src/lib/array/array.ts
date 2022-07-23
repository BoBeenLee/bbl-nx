type SortCompareFunc<T> = (key: keyof T) => (a: T, b: T) => 1 | -1 | 0;

export const defaultASC = <T>(key: keyof T) => {
  return (a: T, b: T) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
};

export const defaultDESC = <T>(key: keyof T) => {
  return (a: T, b: T) => (a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0);
};

export const sortBy = <T>(
  arr: T[],
  key: keyof T,
  compare?: SortCompareFunc<T>
) => {
  const sort = compare ?? defaultASC;
  return arr.concat().sort(sort(key));
};
