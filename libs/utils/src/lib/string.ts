export const traverseObjectKeys = (
  o: { [key: string]: any },
  predicate: (key: string) => boolean
) => {
  const keys = Object.keys(o);
  for (const key of keys) {
    let keyPredicateResult;
    if (typeof o[key] === 'object' && o[key] !== null) {
      keyPredicateResult = traverseObjectKeys(o[key], predicate);
    } else {
      keyPredicateResult = predicate(key);
    }

    if (keyPredicateResult === false) {
      return false;
    }
  }

  return true;
};

export const traverseObjectSliceStr = (
  o: { [key: string]: any },
  maxLength: number
) => {
  const keys = Object.keys(o);
  for (const key of keys) {
    if (typeof o[key] === 'object' && o[key] !== null) {
      o[key] = traverseObjectSliceStr(o[key], maxLength);
    } else if (typeof o[key] === 'string') {
      o[key] = o[key].substr(0, maxLength);
    }
  }
  return o;
};

export function truncate(width: number) {
  return `
        width: ${width}px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `;
}
