const hasPathParameterize = (path: string) => {
  return path.startsWith('[') && path.endsWith(']');
};

const getPathParameterizeKey = (path: string) => {
  const matches = path.match(/\[(.*?)\]/);
  if (matches) {
    return matches[1] ?? '';
  }
  return '';
};

export const makePathname = (
  path: string,
  pathValues: Record<string, string>
) => {
  const pathSplit = path.split('/');

  return pathSplit
    .map((path) => {
      if (hasPathParameterize(path)) {
        return pathValues[getPathParameterizeKey(path)];
      }
      return path;
    })
    .join('/');
};
