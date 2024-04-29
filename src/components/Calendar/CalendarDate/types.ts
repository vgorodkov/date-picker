import { DateVariant, MonthDate, RangeVariant, Weekday } from '@/types/date';

export interface DateProps {
  date: MonthDate | Weekday;
  variant?: DateVariant;
  isSelected?: boolean;
  onDateClick?: (date: MonthDate) => void;
  rangeVariant?: RangeVariant;
}
