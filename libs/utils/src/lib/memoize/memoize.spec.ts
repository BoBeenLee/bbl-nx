import { deepMemoized } from './memoize';

describe('memoize', () => {
  it('deepMemoized, {a:1} should be equal to {a:1}', async () => {
    const object = deepMemoized({ a: 1 });
    const other = deepMemoized({ a: 1 });
    expect(object === other).toBe(true);
  });
});
