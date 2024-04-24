import { CalendarDate } from '@/components/CalendarDate';
import { GridContainer } from '@/styles/common';
import { DateVariant, MonthDate, RangeVariant } from '@/types/date';
import { getMonthDates } from '@/utils/getMonthDates';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

import { CalendarDatesProps } from './types';

export const CalendarDates = ({
  calendarMonth,
  calendarYear,
  onDateClick,
  selectedDate,
  firstDayOfWeek,
  range,
  showHolidays,
  holidayTimestamps,
}: CalendarDatesProps) => {
  const monthDates = getMonthDates(calendarYear, calendarMonth, firstDayOfWeek);

  const isDateSelected = (date: MonthDate) => {
    if (selectedDate) {
      return getTimestampByDate(date) === getTimestampByDate(selectedDate);
    }
    return false;
  };

  const getRangeVariant = (date: MonthDate) => {
    if (!range) return undefined;

    const { start, end } = range;
    const timestamp = getTimestampByDate(date);

    if (start && timestamp === start) return RangeVariant.START;
    if (end && timestamp === end) return RangeVariant.END;
    if (start && end && timestamp > start && timestamp < end) return RangeVariant.INBETWEEN;

    return undefined;
  };

  const getDayVariant = (date: MonthDate) => {
    const { timestamp, month } = date;

    if (showHolidays && timestamp) {
      const dayIndex = new Date(timestamp).getDay();
      if (holidayTimestamps?.includes(timestamp)) {
        return DateVariant.HOLIDAY;
      }
      if (dayIndex === 6 || dayIndex === 0) {
        return DateVariant.HOLIDAY;
      }
    }

    return month === calendarMonth ? DateVariant.DEFAULT : DateVariant.DISABLED;
  };

  return (
    <GridContainer>
      {monthDates.map((date) => (
        <CalendarDate
          onDateClick={onDateClick}
          isSelected={isDateSelected(date)}
          date={date}
          variant={getDayVariant(date)}
          rangeVariant={getRangeVariant(date)}
        />
      ))}
    </GridContainer>
  );
};
