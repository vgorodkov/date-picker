import { MonthDate } from '@/types/date';

import { isDateSelected } from '.';

describe('isDateSelected function', () => {
  const mockDate: MonthDate = { day: 9, month: 5, year: 2024, timestamp: 1705132800000 };
  const mockSelectedDate: MonthDate = { day: 9, month: 5, year: 2024, timestamp: 1705132800000 };

  it('should return true if the date is selected', () => {
    expect(isDateSelected(mockDate, mockSelectedDate)).toBe(true);
  });

  it('should return false if the date is not selected', () => {
    const unselectedDate: MonthDate = { day: 10, month: 5, year: 2024, timestamp: 1705224000000 };
    expect(isDateSelected(unselectedDate, mockSelectedDate)).toBe(false);
  });

  it('should return false if no date is selected', () => {
    expect(isDateSelected(mockDate)).toBe(false);
  });
});
