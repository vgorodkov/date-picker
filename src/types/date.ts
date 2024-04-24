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

export enum FirstWeekDay {
  MONDAY = 'Mo',
  SUNDAY = 'Su',
}

export interface PickerProps {
  firstDayOfWeek?: FirstWeekDay;
  showHolidays?: boolean;
  holidayTimestamps?: number[];
  addTodo?: (date: MonthDate) => void;
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
