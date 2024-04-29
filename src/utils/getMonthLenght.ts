import { CURRENT_MONTH, CURRENT_YEAR } from '@/constants/dates';

export const getMonthLength = (month = CURRENT_MONTH, year = CURRENT_YEAR) => {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;
  return month === 2 ? (leapYear ? 29 : 28) : months30.includes(month) ? 30 : 31;
};
