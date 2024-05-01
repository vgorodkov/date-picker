import { MonthDate } from '@/types/date';

import { zeroPad } from './zeroPad';

export const formatDateInput = (dateInput: MonthDate) => {
  const { day, month, year } = dateInput;
  return `${zeroPad(day, 2)}/${zeroPad(month, 2)}/${year}`;
};
