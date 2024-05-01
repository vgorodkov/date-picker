import { MonthDate } from '@/types/date';

export interface DateInputProps {
  value: MonthDate;
  setValue: (value: MonthDate) => void;
  onClick: () => void;
  onBlur?: () => void;
  label: string;
  isSelected?: boolean;
}
