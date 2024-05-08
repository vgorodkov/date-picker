import { WEEK_DAYS } from '@/constants/dates';
import { DateVariant, MonthDate } from '@/types/date';

export const getDayVariant = (
  date: MonthDate,
  calendarMonth: number,
  holidayTimestamps: number[],
  showHolidays?: boolean
) => {
  const { timestamp, month } = date;
  const isSameMonth = month === calendarMonth;

  if (showHolidays && timestamp) {
    const dayIndex = new Date(timestamp).getDay();
    const isStartOfWeek = dayIndex === 0;
    const isEndOfWeek = dayIndex === WEEK_DAYS.length - 1;
    if (holidayTimestamps.includes(timestamp) || isStartOfWeek || isEndOfWeek) {
      return isSameMonth ? DateVariant.HOLIDAY : DateVariant.DISABLED_HOLIDAY;
    }
  }

  return isSameMonth ? DateVariant.DEFAULT : DateVariant.DISABLED;
};
