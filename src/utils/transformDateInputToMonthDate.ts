import { DateInputValue, MonthDate } from '@/types/date';

export const transformDateInputToMonthDate = (dateInput: DateInputValue): MonthDate => {
  const newDateInput: MonthDate = {
    day: +dateInput.day,
    month: +dateInput.month,
    year: +dateInput.year,
  };
  return newDateInput;
};
