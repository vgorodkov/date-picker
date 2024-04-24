import { MonthDate } from '@/types/date';

export interface CalendarDatesProps {
  calendarYear: number;
  calendarMonth: number;
  selectDate: (date: MonthDate) => void;
  selectedDate: MonthDate | null;
  firstDayOfWeek: 'monday' | 'sunday';
}
