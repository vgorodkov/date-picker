import { DateInputValue } from '@/types/date';

export interface DateInputProps {
  value: DateInputValue;
  setValue: (value: DateInputValue) => void;
  onClick: () => void;
  onBlur?: () => void;
  label: string;
  isSelected?: boolean;
  isDateValid?: boolean;
}
