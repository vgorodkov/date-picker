export enum DateVariant {
  DEFAULT = 'default',
  DISABLED = 'disabled',
  WEEKDAY = 'weekday',
  HOLIDAY = 'holiday',
  DISABLED_HOLIDAY = 'disabledHoliday',
  WITH_TODO = 'withTodo',
}
export interface MonthDate {
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

export interface DateInputValue {
  day: string | number;
  month: string | number;
  year: string | number;
}

export interface Weekday {
  day: string;
}

export const DATE_MASK = { day: 'DD', month: 'MM', year: 'YYYY' };

interface DateLimitDate extends Omit<MonthDate, 'timestamp'> {}

export interface DateLimit {
  min: DateLimitDate;
  max: DateLimitDate;
}
