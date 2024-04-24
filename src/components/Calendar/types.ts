import { FirstWeekDay, MonthDate, Range } from '@/types/date';

export interface CalendarProps {
  onDateClick?: (date: MonthDate) => void;
  selectedDate?: MonthDate | null;
  firstDayOfWeek?: FirstWeekDay;
  range?: Range;
  showHolidays?: boolean;
  holidayTimestamps?: number[];
  month?: number;
  year?: number;
}
