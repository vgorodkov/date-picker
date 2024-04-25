import { CalendarVariant, FirstWeekDay, MonthDate, Range } from '@/types/date';

export interface CalendarProps {
  onDateClick?: (date: MonthDate) => void;
  selectedDate?: MonthDate | null;
  firstDayOfWeek?: FirstWeekDay;
  range?: Range;
  showHolidays?: boolean;
  holidayTimestamps?: number[];
  month?: number;
  year?: number;
  calendarVariant?: CalendarVariant;
}

export interface CalendarState {
  calendarMonth: number;
  calendarYear: number;
  weekIndex: number;
}

export type CalendarAction =
  | { type: 'INCREMENT_MONTH' }
  | { type: 'DECREMENT_MONTH' }
  | { type: 'INCREMENT_WEEK' }
  | { type: 'DECREMENT_WEEK' };
