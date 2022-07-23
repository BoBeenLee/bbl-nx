import memoizeOne from 'memoize-one';
import isEqual from 'lodash.isequal';
import { identity } from '../common/common';

export const deepMemoized = memoizeOne(identity, isEqual) as <T>(x: T) => T;
