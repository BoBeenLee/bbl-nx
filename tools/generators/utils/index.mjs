export const camelize = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

export const toUppercaseFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// "search input" / "search-input" / "SearchInput" / "searchInput" 을 모두 "search-input" 으로.
// 예전 구현은 lowercase + 공백치환만 해서 "SearchInput" → "searchinput" 이 됐다.
// 멱등이어야 하고(호출부가 두 번 적용한다), 기존에 생성된 이름들과 결과가 같아야 한다.
export const toKebabCase = (str) => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
};

// kebab 형태를 경유해서 만든다. camelize 만 쓰면 '-' 가 단어 경계로 남아
// "search-input" -> "Search-Input" 이 되어 컴포넌트 이름으로 못 쓴다.
export const toPascalCase = (str) => {
  return toKebabCase(str).split('-').map(toUppercaseFirstLetter).join('');
};

export const toExtensionTxtToTsx = (str) => {
  return str.toLowerCase().replace(/txt/g, 'tsx');
};

// ('component.spec.txt', 'search-input') -> 'search-input.spec.tsx'
export const toFileNameWithExtensionTsx = (
  templateFileName,
  componentFileName
) => {
  return toExtensionTxtToTsx(templateFileName).replace(
    `component`,
    componentFileName
  );
};
