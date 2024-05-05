import { getTimestampByDate } from '@/utils/getTimestampByDate';

export const getDatesFromCurrentMonth = (month: number, year: number) => {
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
