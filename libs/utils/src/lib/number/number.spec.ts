import { isNaN } from './number';

describe('number', () => {
  it('number isNaN', async () => {
    expect(isNaN(NaN)).toBe(true);
    expect(isNaN(1)).toBe(false);
  });
});
