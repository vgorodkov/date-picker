import { DateInputValue, MonthDate } from '@/types/date';

import { getTimestampByDate } from './getTimestampByDate';

export const transformDateInputToMonthDate = (dateInput: DateInputValue): MonthDate => {
  const { day, month, year } = dateInput;

  const transformedDate = {
    day: +day,
    month: +month,
    year: +year,
  };

  const transformedDateWithTimestamp: MonthDate = {
    ...transformedDate,
    timestamp: getTimestampByDate(transformedDate),
  };
  return transformedDateWithTimestamp;
};
