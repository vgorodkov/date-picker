import { CalendarDate } from '@/components/Calendar/CalendarDate';
import { GridContainer } from '@/styles/containers';
import { getDayVariant } from '@/utils/getDayVariant';
import { getRangeVariant } from '@/utils/getRangeVariant';
import { isDateSelected } from '@/utils/isDateSelected';

import { CalendarContentProps } from './types';

export const CalendarContent = ({
  calendarMonth,
  onDateClick,
  selectedDate,
  range,
  showHolidays,
  holidayTimestamps,
  holidayColor,
  dates,
  withTodo,
}: CalendarContentProps) => {
  return (
    <GridContainer data-testid="calendar-content">
      {dates.map((date, index) => (
        <CalendarDate
          holidayColor={holidayColor}
          data-testid={`calendar-date-${index}`}
          withTodo={withTodo}
          onDateClick={onDateClick}
          isSelected={isDateSelected(date, selectedDate)}
          date={date}
          variant={getDayVariant(date, calendarMonth, holidayTimestamps, showHolidays)}
          rangeVariant={getRangeVariant(date, range)}
          key={date.timestamp}
        />
      ))}
    </GridContainer>
  );
};
