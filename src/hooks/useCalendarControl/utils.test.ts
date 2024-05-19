import { CURRENT_DAY, WEEK_DAYS } from '@/constants/dates';

import { getNextMonth, getPrevMonth, getWeekIndexByDay } from './utils';

describe('getNextMonth', () => {
  it('should return the next month if weekIndex is 4 and not the last month of the year', () => {
    expect(getNextMonth(4, 5)).toBe(6);
  });

  it('should return first month if weekIndex is 4 and it is the last month of the year', () => {
    expect(getNextMonth(4, 12)).toBe(1);
  });

  it('should return the same month if weekIndex is not 4', () => {
    expect(getNextMonth(3, 5)).toBe(5);
  });
});

describe('getPrevMonth', () => {
  it('should return the previous month if weekIndex is 0 and not the first month of the year', () => {
    expect(getPrevMonth(0, 5)).toBe(4);
  });

  it('should return last month if weekIndex is 0 and it is the first month of the year', () => {
    expect(getPrevMonth(0, 1)).toBe(12);
  });

  it('should return the same month if weekIndex is not 0', () => {
    expect(getPrevMonth(1, 5)).toBe(5);
  });
});

describe('getWeekIndexByDay', () => {
  it('should return the correct week index for a given day', () => {
    expect(getWeekIndexByDay(10)).toBe(Math.floor(10 / WEEK_DAYS.length));
  });

  it('should return the week index for CURRENT_DAY if day is undefined', () => {
    expect(getWeekIndexByDay(undefined)).toBe(Math.floor(CURRENT_DAY / WEEK_DAYS.length));
  });

  it('should return 0 for the first day of the month', () => {
    expect(getWeekIndexByDay(1)).toBe(0);
  });

  it('should return the correct week index for the last day of a week', () => {
    expect(getWeekIndexByDay(WEEK_DAYS.length)).toBe(1);
  });
});
