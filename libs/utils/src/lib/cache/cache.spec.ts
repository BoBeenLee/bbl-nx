import { cache } from './cache';

describe('cache', () => {
  it('should be cache case 1', async () => {
    let calledTimes = 0;
    const sumAndLog = cache(
      (a: number, b: number) => {
        calledTimes += 1;
        return Promise.resolve(a + b);
      },
      (a, b) => `${a}${b}`
    );
    await sumAndLog(100, 200);
    await sumAndLog(100, 200);
    sumAndLog.invalidate(100, 200);
    await sumAndLog(100, 200);
    expect(calledTimes).toBe(calledTimes);
  });
});
