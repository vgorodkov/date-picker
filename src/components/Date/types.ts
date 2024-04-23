import { DateVariant, MonthDate, Weekday } from '@/types/date';

export interface DateProps {
  date: MonthDate | Weekday;
  variant?: DateVariant;
  isSelected?: boolean;
  selectDate?: (date: MonthDate) => void;
}
