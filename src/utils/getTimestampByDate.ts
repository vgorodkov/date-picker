import { MonthDate } from '@/types/date';

export const getTimestampByDate = (date: MonthDate) => {
  const { year, month, day } = date;
  return new Date(year, month - 1, day).getTime();
};
