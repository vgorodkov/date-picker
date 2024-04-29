import { CURRENT_DAY, CURRENT_MONTH, CURRENT_YEAR } from '@/constants/dates';
import { MonthDate } from '@/types/date';

import { getTimestampByDate } from './getTimestampByDate';

export const getWeekDates = (
  year: number = CURRENT_YEAR,
  month: number = CURRENT_MONTH,
  day: number = CURRENT_DAY
) => {
  const weekDates = [];
  const currentDate = new Date(year, month - 1, day);

  const dayIndex = currentDate.getDay();
  let startDayOffset = dayIndex - 1;

  if (startDayOffset < 0) {
    startDayOffset += 7;
  }

  const startDate = new Date(currentDate);
  startDate.setDate(startDate.getDate() - startDayOffset);

  for (let i = 0; i < 7; i += 1) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    const newWeekDate = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };
    weekDates.push({
      ...newWeekDate,
      timestamp: getTimestampByDate(newWeekDate),
    });
  }
  return weekDates;
};

export const geetWeekDatesByWeekIndex = (monthDates: MonthDate[], weekIndex: number) => {
  return monthDates.slice(weekIndex * 7, weekIndex * 7 + 7);
};
