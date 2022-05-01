function callValue<T>(supplier: () => T, defaultValue: T) {
  try {
    const value = supplier();
    return value || defaultValue;
  } catch (err) {
    //   console.error(supplier);
    return defaultValue;
  }
}

export { callValue };
