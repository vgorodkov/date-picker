import { CURRENT_DAY, MONTHS, WEEK_DAYS } from '@/constants/dates';

export const getNextMonth = (weekIndex: number, calendarMonth: number): number => {
  if (weekIndex === 4) {
    return calendarMonth === MONTHS.length ? 1 : calendarMonth + 1;
  }
  return calendarMonth;
};

export const getPrevMonth = (weekIndex: number, calendarMonth: number): number => {
  if (weekIndex === 0) {
    return calendarMonth === 1 ? MONTHS.length : calendarMonth - 1;
  }
  return calendarMonth;
};

export const getWeekIndexByDay = (day: number | undefined) => {
  return Math.floor((day ?? CURRENT_DAY) / WEEK_DAYS.length);
};
