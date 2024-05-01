import { MONTHS, WEEKS_AMOUNT } from '@/constants/dates';
import { FirstWeekDay, MonthDate } from '@/types/date';

import { getTimestampByDate } from './getTimestampByDate';
import { getWeekDays } from './getWeekDays';

const getDatesFromPrevMonth = (
  firstDayOfWeek: FirstWeekDay,
  month: number,
  year: number,
  weekDaysLength: number
): MonthDate[] => {
  const dates = [];
  const firstDayInMonth = new Date(year, Math.max(month - 1, 0), 1).getDay();
  const lastDayInPrevMonth = new Date(year, Math.max(month - 1, 0), 0).getDate();
  const restFromPrevMonth = firstDayInMonth === 0 ? weekDaysLength - 1 : firstDayInMonth - 1;

  for (let i = restFromPrevMonth - (firstDayOfWeek === 'Mo' ? 1 : 0); i >= 0; i -= 1) {
    const date = {
      day: lastDayInPrevMonth - i,
      month: month === 1 ? MONTHS.length : month - 1,
      year: month === 1 ? year - 1 : year,
    };

    dates.push({ ...date, timestamp: getTimestampByDate(date) });
  }
  return dates;
};

const getDatesFromCurrentMonth = (month: number, year: number) => {
  const dates = [];

  const lastDayInMonth = new Date(year, month, 0).getDate();

  for (let i = 1; i <= lastDayInMonth; i += 1) {
    const date = {
      day: i,
      month,
      year,
    };
    dates.push({ ...date, timestamp: getTimestampByDate(date) });
  }
  return dates;
};

const getDatesFromNextMonth = (
  month: number,
  year: number,
  weekDaysLength: number,
  monthDatesLength: number
) => {
  const dates = [];

  const restToFillFromNextMonth = WEEKS_AMOUNT * weekDaysLength - monthDatesLength;

  for (let i = 1; i <= restToFillFromNextMonth; i += 1) {
    const date = {
      day: i,
      month: month === MONTHS.length ? 1 : month + 1,
      year: month === MONTHS.length ? year + 1 : year,
    };
    dates.push({
      ...date,
      timestamp: getTimestampByDate(date),
    });
  }
  return dates;
};

export const getMonthDates = (year: number, month: number, firstDayOfWeek: FirstWeekDay) => {
  const weekDays = getWeekDays(firstDayOfWeek);

  const datesFromPrevMonth = getDatesFromPrevMonth(firstDayOfWeek, month, year, weekDays.length);

  const datesFromCurrentMonth = getDatesFromCurrentMonth(month, year);

  const monthDatesLength = datesFromPrevMonth.length + datesFromCurrentMonth.length;

  const datesFromNextMonth = getDatesFromNextMonth(month, year, weekDays.length, monthDatesLength);

  return [...datesFromPrevMonth, ...datesFromCurrentMonth, ...datesFromNextMonth];
};
