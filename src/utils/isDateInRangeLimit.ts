import { DateLimit, MonthDate } from '@/types/date';

import { getTimestampByDate } from './getTimestampByDate';

export const isDateInRangeLimit = (dateInput: MonthDate, dateLimit: DateLimit) => {
  if (!dateInput) {
    return false;
  }

  const dateTimestamp = getTimestampByDate(dateInput);
  const minTimestamp = getTimestampByDate(dateLimit.min);
  const maxTimestamp = getTimestampByDate(dateLimit.max);

  const isInRange = dateTimestamp >= minTimestamp && dateTimestamp <= maxTimestamp;

  return isInRange;
};
