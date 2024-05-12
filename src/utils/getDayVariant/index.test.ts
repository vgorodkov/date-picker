import { DateVariant } from '@/types/date';

import { getTimestampByDate } from '../getTimestampByDate';
import { getDayVariant } from '.';

describe('getDayVariant function', () => {
  const calendarMonth = 5;
  const showHolidays = true;

  const mockCurrentMonthHoliday = { month: 5, day: 1, year: 2024 };
  const mockPrevMonthHoliday = { month: 4, day: 1, year: 2024 };
  const mockDefaultDay = { month: 5, day: 20, year: 2024 };
  const mockPrevMonthDay = { month: 4, day: 20, year: 2024 };

  const holidayTimestamps = [
    getTimestampByDate(mockCurrentMonthHoliday),
    getTimestampByDate(mockPrevMonthHoliday),
  ];

  const currentMonthHoliday = { ...mockCurrentMonthHoliday, timestamp: holidayTimestamps[0] };
  const prevMonthHoliday = { ...mockPrevMonthHoliday, timestamp: holidayTimestamps[1] };
  const currentMonthDay = { ...mockDefaultDay, timestamp: 1 };
  const prevMonthDay = { ...mockPrevMonthDay, timestamp: 1 };

  const dateVariant = getDayVariant(
    currentMonthHoliday,
    calendarMonth,
    holidayTimestamps,
    showHolidays
  );

  it('should return DateVariant.HOLIDAY if the date is a holiday and in the same month', () => {
    expect(dateVariant).toBe(DateVariant.HOLIDAY);
  });

  it('should return DateVariant.DISABLED_HOLIDAY if the date is a holiday and not in the same month', () => {
    const result = getDayVariant(prevMonthHoliday, calendarMonth, holidayTimestamps, showHolidays);
    expect(result).toBe(DateVariant.DISABLED_HOLIDAY);
  });

  it('should return DateVariant.DEFAULT if the date is in the same month and not a holiday', () => {
    const result = getDayVariant(currentMonthDay, calendarMonth, holidayTimestamps, showHolidays);
    expect(result).toBe(DateVariant.DEFAULT);
  });

  it('should return DateVariant.DISABLED if the date is not in the same month and not a holiday', () => {
    const result = getDayVariant(prevMonthDay, calendarMonth, holidayTimestamps, showHolidays);
    expect(result).toBe(DateVariant.DISABLED);
  });

  it('should return DateVariant.DEFAULT if showHolidays is false', () => {
    const result = getDayVariant(currentMonthHoliday, calendarMonth, holidayTimestamps, false);
    expect(result).toBe(DateVariant.DEFAULT);
  });
});
