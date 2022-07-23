import { defaultDESC, sortBy } from './array';

describe('array', () => {
  it('sortBy', async () => {
    const fruits = [
      { name: 'banana', amount: 2 },
      { name: 'apple', amount: 4 },
      { name: 'pineapple', amount: 2 },
      { name: 'mango', amount: 1 },
    ];
    expect(sortBy(fruits, 'name')).toEqual([
      { name: 'apple', amount: 4 },
      { name: 'banana', amount: 2 },
      { name: 'mango', amount: 1 },
      { name: 'pineapple', amount: 2 },
    ]);
    expect(sortBy(fruits, 'name', defaultDESC)).toEqual([
      { name: 'pineapple', amount: 2 },
      { name: 'mango', amount: 1 },
      { name: 'banana', amount: 2 },
      { name: 'apple', amount: 4 },
    ]);
  });
});
