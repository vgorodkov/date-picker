export enum DateVariant {
  DEFAULT = 'default',
  DISABLED = 'disabled',
  WEEKDAY = 'weekday',
  HOLIDAY = 'holiday',
  DISABLED_HOLIDAY = 'disabledHoliday',
}
export interface MonthDate {
  day: number | string;
  month: number | string;
  year: number | string;
  timestamp?: number;
}

export interface Weekday {
  day: string;
}
