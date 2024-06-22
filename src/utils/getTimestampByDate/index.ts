import { CalendarDate } from '@/types/date';

export const getTimestampByDate = (date: CalendarDate) => {
  const { year, month, day } = date;
  return new Date(year, month - 1, day).getTime();
};
