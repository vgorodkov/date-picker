import { DateVariant } from '@/types/date';

export interface DateProps {
  date: {
    day: number | string;
    year?: number;
    month?: number;
  };
  variant?: DateVariant;
  selected?: boolean;
}
