import { MONTHS } from '@/constants/dates';
import { MonthDate } from '@/types/date';
import { FirstWeekDay } from '@/types/picker';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

export const getDatesFromPrevMonth = (
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
