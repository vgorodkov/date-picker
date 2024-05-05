import { MonthDate } from '@/types/date';

interface NoTimestampMonthDate extends Omit<MonthDate, 'timestamp'> {}

export const getTimestampByDate = (date: NoTimestampMonthDate) => {
  const { year, month, day } = date;
  return new Date(+year, +month - 1, +day).getTime();
};
