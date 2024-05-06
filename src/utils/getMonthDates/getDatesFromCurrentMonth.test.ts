import { getDatesFromCurrentMonth } from './getDatesFromCurrentMonth';

describe('getDatesFromCurrentMonth', () => {
  it('should return an array of dates for current month', () => {
    const month = 4;
    const year = 2024;
    const lastDayInMonth = new Date(year, month, 0).getDate();
    const result = getDatesFromCurrentMonth(month, year);

    expect(result).toHaveLength(lastDayInMonth);
    result.forEach((date, index) => {
      expect(date.day).toBe(index + 1);
      expect(date.month).toBe(month);
      expect(date.year).toBe(year);
    });
  });
});
