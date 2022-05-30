
interface TraverseObject {
  [index: string]: TraverseObject | string;
}

export const traverseObjectKeys = (
  o: TraverseObject,
  predicate: (key: string) => boolean
) => {
  for (const key in o) {
    let keyPredicateResult;
    const oValue = o[key];
    if (typeof oValue !== 'string' && oValue) {
      keyPredicateResult = traverseObjectKeys(oValue, predicate);
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
  o: TraverseObject,
  maxLength: number
) => {
  for (const key in o) {
    const oValue = o[key];
    if (typeof oValue !== 'string' && oValue) {
      o[key] = traverseObjectSliceStr(oValue, maxLength);
    } else if (typeof oValue === 'string') {
      o[key] = oValue.substring(0, maxLength);
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
