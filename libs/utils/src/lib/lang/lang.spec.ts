import { isEmpty } from './lang';

describe('lang', () => {
  it('lang isEmpty', async () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({ a: '1' })).toBe(false);
  });
});
