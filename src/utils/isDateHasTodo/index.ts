import { DateVariant, MonthDate } from '@/types/date';

export const isDateHasTodo = (date: MonthDate, dateVariant: DateVariant) => {
  if (dateVariant === DateVariant.WEEKDAY) {
    return false;
  }

  const { day, month, year } = date;

  return !!localStorage.getItem(`${day}-${month}-${year}`);
};
