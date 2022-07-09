import { optional } from './common';

describe('common', () => {
  it('opitonal should be error handling', () => {
    const errorMessage = 'Error';
    optional(
      () => {
        throw new Error(errorMessage);
      },
      (err) => {
        if (err instanceof Error) {
          expect(err.message).toBe(errorMessage);
        }
      }
    );
  });
  it('opitonal should be sum 10', () => {
    const sum = optional((a, b) => {
      return a + b;
    });
    expect(sum(5, 5)).toBe(10);
  });
});
