import { MonthDate } from '@/types/date';
import { Range } from '@/types/range';

export interface CalendarContentProps {
  calendarMonth: number;
  onDateClick?: (date: MonthDate) => void;
  selectedDate?: MonthDate | null;
  range?: Range;
  showHolidays?: boolean;
  holidayTimestamps?: number[];
  dates: MonthDate[];
  withTodo: boolean;
}
