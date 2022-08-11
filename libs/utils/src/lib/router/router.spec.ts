import { makePathname } from './router';

describe('router', () => {
  it('normal pathname', async () => {
    expect(makePathname('/about', {})).toBe('/about');
  });

  it('pathvalues pathname', async () => {
    expect(makePathname('/about/[id]', { id: '1' })).toBe('/about/1');
  });

  it('two pathvalues pathname', async () => {
    expect(makePathname('/about/[id]/[tabId]', { id: '1', tabId: '2' })).toBe(
      '/about/1/2'
    );
  });
});
