export enum DateVariant {
  DEFAULT = 'default',
  DISABLED = 'disabled',
  WEEKDAY = 'weekday',
}

export interface MonthDate {
  day: number;
  month: number;
  year: number;
  timestamp: number;
}
