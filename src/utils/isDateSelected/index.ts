import { MonthDate } from '@/types/date';

export const isDateSelected = (date: MonthDate, selectedDate?: MonthDate | null) => {
  if (selectedDate) {
    return date.timestamp === selectedDate.timestamp;
  }
  return false;
};
