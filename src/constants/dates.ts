import { getTimestampByDate } from '@/utils/getTimestampByDate';

export const CURRENT_DAY = new Date().getDate();

export const CURRENT_YEAR = new Date().getFullYear();

export const CURRENT_MONTH = new Date().getMonth() + 1;

export const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'Jule',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const WEEKS_AMOUNT = 6;

export const DEFAULT_DAY = {
  day: CURRENT_DAY,
  month: CURRENT_MONTH,
  year: CURRENT_YEAR,
};

export const DEFAULT_DAY_WITH_TIMESTAMP = {
  ...DEFAULT_DAY,
  timestamp: getTimestampByDate(DEFAULT_DAY),
};
