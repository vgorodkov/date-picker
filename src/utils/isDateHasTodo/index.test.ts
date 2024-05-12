import { DateVariant, MonthDate } from '@/types/date';

import { isDateHasTodo } from '.';

describe('isDateHasTodo function', () => {
  const mockWeekday: MonthDate = { day: 9, month: 5, year: 2024, timestamp: 1705132800000 };
  const mockWeekend: MonthDate = { day: 8, month: 5, year: 2024, timestamp: 1705046400000 };
  const mockStorageKey = '8-5-2024';
  const mockWeekdayVariant = DateVariant.WEEKDAY;
  const mockDefaultVariant = DateVariant.DEFAULT;

  it('should return false if the date variant is WEEKDAY', () => {
    expect(isDateHasTodo(mockWeekday, mockWeekdayVariant)).toBe(false);
  });

  it('should return true if there is a todo for the date and date variant is not WEEKDAY', () => {
    localStorage.setItem(mockStorageKey, 'Some todo');
    expect(isDateHasTodo(mockWeekend, mockDefaultVariant)).toBe(true);
  });

  it('should return false if there is no todo for the date and date variant is not WEEKDAY', () => {
    localStorage.removeItem(mockStorageKey);
    expect(isDateHasTodo(mockWeekend, mockDefaultVariant)).toBe(false);
  });
});
