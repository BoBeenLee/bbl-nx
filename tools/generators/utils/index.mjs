export const camelize = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const transformFileName = (str) => {
  return str.toLowerCase().replace(/ /g, '-');
};

export const transformComponentName = (str) => {
  return capitalizeFirstLetter(camelize(str));
};

export const transformFileTxtToTsx = (str) => {
  return str.toLowerCase().replace(/txt/g, 'tsx');
};

export const transformComponentFileName = (
  componentFileName,
  componentName
) => {
  return transformFileTxtToTsx(componentFileName).replace(
    `component`,
    componentName
  );
};
