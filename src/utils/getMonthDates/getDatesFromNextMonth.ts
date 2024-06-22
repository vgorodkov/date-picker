import { MONTHS, WEEKS_AMOUNT } from '@/constants/dates';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

export const getDatesFromNextMonth = (
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
