import { WEEKS_AMOUNT } from '@/constants/dates';
import { FirstWeekDay } from '@/types/picker';

import { getMonthDates } from '.';

describe('getMonthDates function', () => {
  const year = 2024;
  const month = 5;
  const firstDayOfWeek: FirstWeekDay = 'Su';

  test('should return correct number of dates', () => {
    const monthDates = getMonthDates(year, month, firstDayOfWeek);
    const expectedMonthLength = new Date(year, month, 0).getDate();
    const expectedDatesLength = WEEKS_AMOUNT * 7;

    expect(monthDates).toHaveLength(expectedDatesLength);
    expect(monthDates.filter((date) => date.month === month)).toHaveLength(expectedMonthLength);
  });
});
