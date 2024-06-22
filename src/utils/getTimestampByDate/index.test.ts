import { getTimestampByDate } from '.';

describe('getTimestampByDate function', () => {
  it('should return the correct timestamp for a given date', () => {
    const date = { year: 2024, month: 5, day: 6 };
    const expectedTimestamp = new Date(2024, 4, 6).getTime();
    expect(getTimestampByDate(date)).toBe(expectedTimestamp);
  });

  it('should return the correct timestamp for another date', () => {
    const date = { year: 2023, month: 12, day: 25 };
    const expectedTimestamp = new Date(2023, 11, 25).getTime();
    expect(getTimestampByDate(date)).toBe(expectedTimestamp);
  });
});
