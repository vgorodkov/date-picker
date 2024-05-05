import { FirstWeekDay } from '@/types/picker';
import { getWeekDays } from '@/utils/getWeekDays';

import { getDatesFromCurrentMonth } from './getDatesFromCurrentMonth';
import { getDatesFromNextMonth } from './getDatesFromNextMonth';
import { getDatesFromPrevMonth } from './getDatesFromPrevMonth';

export const getMonthDates = (year: number, month: number, firstDayOfWeek: FirstWeekDay) => {
  const weekDays = getWeekDays(firstDayOfWeek);

  const datesFromPrevMonth = getDatesFromPrevMonth(firstDayOfWeek, month, year, weekDays.length);
  const datesFromCurrentMonth = getDatesFromCurrentMonth(month, year);

  const monthDatesLength = datesFromPrevMonth.length + datesFromCurrentMonth.length;

  const datesFromNextMonth = getDatesFromNextMonth(month, year, weekDays.length, monthDatesLength);

  return [...datesFromPrevMonth, ...datesFromCurrentMonth, ...datesFromNextMonth];
};
