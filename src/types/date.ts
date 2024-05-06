export enum DateVariant {
  DEFAULT = 'default',
  DISABLED = 'disabled',
  WEEKDAY = 'weekday',
  HOLIDAY = 'holiday',
  DISABLED_HOLIDAY = 'disabledHoliday',
}
export interface MonthDate {
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

export interface CalendarDate extends Omit<MonthDate, 'timestamp'> {}

export interface DateInputValue {
  day: string | number;
  month: string | number;
  year: string | number;
}

export interface Weekday {
  day: string;
}

export interface DateLimit {
  min: CalendarDate;
  max: CalendarDate;
}
