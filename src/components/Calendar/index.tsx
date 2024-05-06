import { CalendarContent } from '@/components/Calendar/CalendarContent';
import { CalendarHeader } from '@/components/Calendar/CalendarHeader';
import { MONTHS } from '@/constants/dates';
import { useCalendarControl } from '@/hooks/useCalendarControl';
import { getMonthDates } from '@/utils/getMonthDates';
import { geetWeekDatesByWeekIndex } from '@/utils/getWeekDates';

import { CalendarContainer } from './styled';
import { CalendarProps } from './types';

export const Calendar = ({
  selectedDate = null,
  onDateClick,
  firstDayOfWeek = 'Mo',
  range = {
    start: null,
    end: null,
  },
  showHolidays = false,
  holidayTimestamps = [],
  calendarVariant = 'month',
  withTodo = false,
}: CalendarProps) => {
  const { calendarMonth, calendarYear, weekIndex, selectNextPeriod, selectPrevPeriod } =
    useCalendarControl(selectedDate, calendarVariant);

  const calendarMonthName =
    calendarMonth === 0 ? MONTHS[calendarMonth] : MONTHS[+calendarMonth - 1];
  const isWeekMode = calendarVariant === 'week';
  const monthDates = getMonthDates(calendarYear, calendarMonth, firstDayOfWeek);
  const dates = isWeekMode ? geetWeekDatesByWeekIndex(monthDates, weekIndex) : monthDates;

  return (
    <CalendarContainer data-testid="calendar-component">
      <CalendarHeader
        selectNextPeriod={selectNextPeriod}
        selectPrevPeriod={selectPrevPeriod}
        calendarMonthName={calendarMonthName}
        calendarYear={calendarYear}
        firstDayOfWeek={firstDayOfWeek}
      />
      <CalendarContent
        dates={dates}
        calendarMonth={calendarMonth}
        onDateClick={onDateClick}
        selectedDate={selectedDate}
        range={range}
        showHolidays={showHolidays}
        holidayTimestamps={holidayTimestamps}
        withTodo={withTodo}
      />
    </CalendarContainer>
  );
};
