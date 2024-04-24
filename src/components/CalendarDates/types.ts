import { FirstWeekDay, MonthDate, Range } from '@/types/date';

export interface CalendarDatesProps {
  calendarYear: number;
  calendarMonth: number;
  onDateClick?: (date: MonthDate) => void;
  selectedDate?: MonthDate | null;
  firstDayOfWeek: FirstWeekDay;
  range?: Range;
  showHolidays?: boolean;
}
