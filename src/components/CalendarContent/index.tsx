import { CalendarDate } from '@/components/CalendarDate';
import { GridContainer } from '@/styles/common';
import { DateVariant, MonthDate, RangeVariant } from '@/types/date';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

import { CalendarContentProps } from './types';

export const CalendarContent = ({
  calendarMonth,
  onDateClick,
  selectedDate,
  range,
  showHolidays,
  holidayTimestamps = [],
  dates,
}: CalendarContentProps) => {
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
      {dates.map((date) => (
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
