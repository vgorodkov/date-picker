import { DateInputValue } from '@/types/date';

export const isInputMaskified = (dateInput: DateInputValue) => {
  return Object.values(dateInput).every((value) => /^\d+$/.test(value));
};
