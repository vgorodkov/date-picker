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
  timestamp?: number;
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

export interface DateLimit {
  min: MonthDate;
  max: MonthDate;
}
