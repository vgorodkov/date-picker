import { MonthDate } from '@/types/date';

export interface CalendarProps {
  selectDate: (date: MonthDate) => void;
  selectedDate: MonthDate | null;
  firstDayOfWeek: 'monday' | 'sunday';
}
