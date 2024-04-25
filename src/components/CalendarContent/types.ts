import { MonthDate, Range } from '@/types/date';

export interface CalendarContentProps {
  calendarMonth: number;
  onDateClick?: (date: MonthDate) => void;
  selectedDate?: MonthDate | null;
  range?: Range;
  showHolidays?: boolean;
  holidayTimestamps?: number[];
  dates: MonthDate[];
}
