import { CalendarDate } from '@/components/Calendar/CalendarDate';
import { WEEK_DAYS } from '@/constants/dates';
import { GridContainer } from '@/styles/common';
import { DateVariant, MonthDate } from '@/types/date';
import { RangeVariant } from '@/types/range';

import { CalendarContentProps } from './types';

export const CalendarContent = ({
  calendarMonth,
  onDateClick,
  selectedDate,
  range,
  showHolidays,
  holidayTimestamps = [],
  dates,
  withTodo,
}: CalendarContentProps) => {
  const isDateSelected = (date: MonthDate) => {
    if (selectedDate) {
      return date.timestamp === selectedDate.timestamp;
    }
    return false;
  };

  const getRangeVariant = (date: MonthDate) => {
    if (!range) return undefined;

    const { start, end } = range;
    const { timestamp } = date;

    if (!timestamp) {
      return undefined;
    }

    if (timestamp === start) return RangeVariant.START;
    if (timestamp === end) return RangeVariant.END;
    if (start && end && timestamp > start && timestamp < end) return RangeVariant.INBETWEEN;

    return undefined;
  };

  const getDayVariant = (date: MonthDate) => {
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

  return (
    <GridContainer>
      {dates.map((date) => (
        <CalendarDate
          withTodo={withTodo}
          onDateClick={onDateClick}
          isSelected={isDateSelected(date)}
          date={date}
          variant={getDayVariant(date)}
          rangeVariant={getRangeVariant(date)}
          key={date.timestamp}
        />
      ))}
    </GridContainer>
  );
};
