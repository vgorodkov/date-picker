import { DateVariant, MonthDate, Weekday } from '@/types/date';
import { RangeVariant } from '@/types/range';

export interface DateProps {
  date: MonthDate | Weekday;
  variant?: DateVariant;
  isSelected?: boolean;
  onDateClick?: (date: MonthDate) => void;
  rangeVariant?: RangeVariant;
  withTodo?: boolean;
  holidayColor?: string;
}
