import { CURRENT_MONTH, CURRENT_YEAR, MONTHS } from '@/constants/dates';
import { FirstWeekDay } from '@/types/picker';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

import { getDatesFromPrevMonth } from './getDatesFromPrevMonth';

jest.mock('@/utils/getTimestampByDate', () => ({
  getTimestampByDate: jest.fn(),
}));

describe('getDatesFromPrevMonth', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return an array of dates for the previous month', () => {
    const firstDayOfWeek: FirstWeekDay = 'Mo';

    const weekDaysLength = 7;
    const firstDayInMonth = new Date(CURRENT_YEAR, CURRENT_MONTH - 1, 1).getDay();
    const lastDayInPrevMonth = new Date(CURRENT_YEAR, CURRENT_MONTH - 1, 0).getDate();
    const restFromPrevMonth = firstDayInMonth === 0 ? weekDaysLength - 1 : firstDayInMonth - 1;

    const mockTimestamp = 1619827200000;
    getTimestampByDate.mockReturnValue(mockTimestamp);

    const result = getDatesFromPrevMonth(
      firstDayOfWeek,
      CURRENT_MONTH,
      CURRENT_YEAR,
      weekDaysLength
    );

    const prevMonth = CURRENT_MONTH === 1 ? MONTHS.length : CURRENT_MONTH - 1;
    const prevYear = CURRENT_MONTH === 1 ? CURRENT_YEAR - 1 : CURRENT_YEAR;

    expect(result).toHaveLength(restFromPrevMonth);
    result.forEach((date, index) => {
      expect(date.day).toBe(lastDayInPrevMonth - restFromPrevMonth + index + 1);
      expect(date.month).toBe(prevMonth);
      expect(date.year).toBe(prevYear);
      expect(date.timestamp).toBe(mockTimestamp);
    });
  });
});
