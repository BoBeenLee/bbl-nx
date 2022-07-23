import {
  parseDate,
  parseDateFns,
  transformDateTimeStrToText,
  toDateTimeText,
} from './datetime';

describe('datetime', () => {
  it('parseDate', async () => {
    expect(parseDate('2010-10-01').toLocaleString()).toBe(
      new Date('2010-10-01').toLocaleString()
    );
  });
  it('parseDateFns', async () => {
    expect(parseDateFns('2010/10/01', 'yyyy/MM/dd').toLocaleDateString()).toBe(
      new Date('2010-10-01').toLocaleDateString()
    );
  });

  it('transformDateTimeStrToText', async () => {
    expect(transformDateTimeStrToText('2010/10/01', 'MMMM d, yyyy')).toBe(
      `October 1, 2010`
    );
  });

  it('toDateTimeText', async () => {
    expect(
      toDateTimeText(new Date('2010-10-01').valueOf(), 'MMMM d, yyyy')
    ).toBe(`October 1, 2010`);
  });
});
