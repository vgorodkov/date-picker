import { DateVariant, MonthDate, Weekday } from '@/types/date';

export const getDateTestId = (date: MonthDate | Weekday, variant: DateVariant) => {
  if (variant === DateVariant.WEEKDAY) {
    const { day } = date as Weekday;
    return `calendar-date-${day}`;
  }
  const { day, month } = date as MonthDate;
  return `calendar-date-${day}-${month}`;
};
