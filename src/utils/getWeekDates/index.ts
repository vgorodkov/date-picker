import { MonthDate } from '@/types/date';

export const geetWeekDatesByWeekIndex = (monthDates: MonthDate[], weekIndex: number) => {
  return monthDates.slice(weekIndex * 7, weekIndex * 7 + 7);
};
