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

export const chunk = <T>(arr: T[], size: number) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunkSlice = arr.slice(i, i + size);
    res.push(chunkSlice);
  }
  return res;
};
