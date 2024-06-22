import { getMonthDates } from '@/utils/getMonthDates';

import { geetWeekDatesByWeekIndex } from '.';

describe('geetWeekDatesByWeekIndex function', () => {
  const monthDates = getMonthDates(2024, 5, 'Mo');
  it('should return the dates for the given week index', () => {
    const weekIndex = 0;
    const expectedWeekDates = monthDates.slice(0, 7);
    expect(geetWeekDatesByWeekIndex(monthDates, weekIndex)).toEqual(expectedWeekDates);
  });

  it('should return an empty array for out-of-range week index', () => {
    const weekIndex = -1;
    expect(geetWeekDatesByWeekIndex(monthDates, weekIndex)).toEqual([]);
  });
});
