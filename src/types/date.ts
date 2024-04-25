export enum DateVariant {
  DEFAULT = 'default',
  DISABLED = 'disabled',
  WEEKDAY = 'weekday',
  HOLIDAY = 'holiday',
}

export enum RangeVariant {
  START = 'start',
  INBETWEEN = 'inbetween',
  END = 'end',
}

export type FirstWeekDay = 'Mo' | 'Su';
export type CalendarVariant = 'week' | 'month';

export interface PickerProps {
  firstDayOfWeek?: FirstWeekDay;
  showHolidays?: boolean;
  holidayTimestamps?: number[];
  addTodo?: (date: MonthDate) => void;
  calendarVariant: CalendarVariant;
}

export interface MonthDate {
  day: number;
  month: number;
  year: number;
  timestamp?: number;
}

export interface Weekday {
  day: string;
}

export interface Range {
  start: number | null;
  end: number | null;
}
