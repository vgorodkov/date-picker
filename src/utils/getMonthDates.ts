import { MONTHS, WEEKS_AMOUNT } from '@/constants/dates';
import { FirstWeekDay, MonthDate } from '@/types/date';

import { getTimestampByDate } from './getTimestampByDate';
import { getWeekDays } from './getWeekDays';

export const getMonthDates = (year: number, month: number, firstDayOfWeek: FirstWeekDay) => {
  const weekDays = getWeekDays(firstDayOfWeek);
  const monthDates: MonthDate[] = [];
  const firstDayInMonth = new Date(year, Math.max(month - 1, 0), 1).getDay();
  const lastDayInMonth = new Date(year, month, 0).getDate();
  const lastDayInPrevMonth = new Date(year, Math.max(month - 1, 0), 0).getDate();
  const restFromPrevMonth = firstDayInMonth === 0 ? weekDays.length - 1 : firstDayInMonth - 1;

  for (let i = restFromPrevMonth - (firstDayOfWeek === 'Mo' ? 1 : 0); i >= 0; i -= 1) {
    const date = {
      day: lastDayInPrevMonth - i,
      month: month === 1 ? MONTHS.length : month - 1,
      year: month === 1 ? year - 1 : year,
    };

    monthDates.push({ ...date, timestamp: getTimestampByDate(date) });
  }

  for (let i = 1; i <= lastDayInMonth; i += 1) {
    const date = {
      day: i,
      month,
      year,
    };
    monthDates.push({ ...date, timestamp: getTimestampByDate(date) });
  }

  const restToFillFromNextMonth = WEEKS_AMOUNT * weekDays.length - monthDates.length;

  for (let i = 1; i <= restToFillFromNextMonth; i += 1) {
    const date = {
      day: i,
      month: month === MONTHS.length ? 1 : month + 1,
      year: month === MONTHS.length ? year + 1 : year,
    };
    monthDates.push({
      ...date,
      timestamp: getTimestampByDate(date),
    });
  }
  return monthDates;
};
