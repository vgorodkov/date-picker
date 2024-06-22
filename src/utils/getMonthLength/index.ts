import { CURRENT_MONTH, CURRENT_YEAR } from '@/constants/dates';

export const getMonthLength = (month = CURRENT_MONTH, year = CURRENT_YEAR) => {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;
  if (month === 2) {
    if (leapYear) {
      return 29;
    }
    return 28;
  }

  if (months30.includes(month)) {
    return 30;
  }

  return 31;
};
