import { MonthDate } from '@/types/date';

import { getTimestampByDate } from './getTimestampByDate';

const MIN_DATE: MonthDate = { day: 1, month: 1, year: 2020 };
const MAX_DATE: MonthDate = { day: 1, month: 1, year: 2030 };

export const isDateValid = (dateInput: MonthDate) => {
  const dateTimestamp = getTimestampByDate(dateInput);
  const maxTimestamp = getTimestampByDate(MAX_DATE);
  const minTimestamp = getTimestampByDate(MIN_DATE);

  const isInRange = dateTimestamp >= minTimestamp && dateTimestamp <= maxTimestamp;
  return isInRange;
};
