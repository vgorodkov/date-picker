import { DateInputValue } from '@/types/date';

import { zeroPad } from './zeroPad';

export const formatDateInput = (dateInput: DateInputValue) => {
  const { day, month, year } = dateInput;
  return `${zeroPad(day, 2)}/${zeroPad(month, 2)}/${year}`;
};
