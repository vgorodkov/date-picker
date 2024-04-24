import { InputHTMLAttributes } from 'react';

export interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  resetDate: () => void;
  isSelected?: boolean;
}
