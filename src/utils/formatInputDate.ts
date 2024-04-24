import { MonthDate } from '@/types/date';

import { zeroPad } from './zeroPad';

export const formatInputDate = (date: MonthDate | null) => {
  if (date) {
    return `${zeroPad(date.day, 2)}/${zeroPad(date.month, 2)}/${date.year}`;
  }
  return '';
};
