import { getDatesFromNextMonth } from './getDatesFromNextMonth';

describe('getDatesFromNexyMonth', () => {
  it('should return an array of dates for next month', () => {
    const month = 4;
    const year = 2024;
    const weekDaysLength = 7;
    const monthLength = 33;
    const result = getDatesFromNextMonth(month, year, weekDaysLength, monthLength);

    expect(result).toHaveLength(6 * 7 - monthLength);
    result.forEach((date, index) => {
      expect(date.day).toBe(index + 1);
      expect(date.month).toBe(month + 1);
      expect(date.year).toBe(year);
    });
  });
});
