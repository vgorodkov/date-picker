import { WEEK_DAYS } from '@/constants/dates';

export const getWeekDays = (startDay: string) => {
  const startIndex = WEEK_DAYS.indexOf(startDay);
  if (startIndex === -1) {
    throw new Error('Invalid start day');
  }
  return [...WEEK_DAYS.slice(startIndex), ...WEEK_DAYS.slice(0, startIndex)];
};
