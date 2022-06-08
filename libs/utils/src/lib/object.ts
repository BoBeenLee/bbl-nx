function callValue<T>(supplier: () => T, defaultValue: T) {
  try {
    const value = supplier();
    return value || defaultValue;
  } catch (err) {
    //   console.error(supplier);
    return defaultValue;
  }
}


function getKeys<T>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}


export { callValue, getKeys };
