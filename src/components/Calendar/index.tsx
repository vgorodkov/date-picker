import { useMemo, useReducer } from 'react';

import { CalendarContent } from '@/components/CalendarContent';
import { CalendarHeader } from '@/components/CalendarHeader';
import { CURRENT_DAY, CURRENT_MONTH, CURRENT_YEAR, MONTHS } from '@/constants/dates';
import { getMonthDates } from '@/utils/getMonthDates';
import { geetWeekDatesByWeekIndex } from '@/utils/getWeekDates';

import { calendarReducer, initialState } from './reducer';
import { CalendarContainer } from './styled';
import { CalendarProps } from './types';

export const Calendar = ({
  selectedDate = {
    day: CURRENT_DAY,
    month: CURRENT_MONTH,
    year: CURRENT_YEAR,
  },
  onDateClick,
  firstDayOfWeek = 'Mo',
  range,
  showHolidays = false,
  holidayTimestamps,
  calendarVariant,
}: CalendarProps) => {
  const [{ calendarMonth, calendarYear, weekIndex }, dispatch] = useReducer(
    calendarReducer,
    initialState
  );

  const isWeekMode = calendarVariant === 'week';

  const monthDates = getMonthDates(calendarYear, calendarMonth, firstDayOfWeek);
  const dates = isWeekMode ? geetWeekDatesByWeekIndex(monthDates, weekIndex) : monthDates;

  const calendarMonthName = useMemo(
    () => (calendarMonth === 0 ? MONTHS[calendarMonth] : MONTHS[calendarMonth - 1]),
    [calendarMonth]
  );

  const selectNextPeriod = () => {
    if (isWeekMode) {
      dispatch({ type: 'INCREMENT_WEEK' });
    } else {
      dispatch({ type: 'INCREMENT_MONTH' });
    }
  };

  const selectPrevPeriod = () => {
    if (isWeekMode) {
      dispatch({ type: 'DECREMENT_WEEK' });
    } else {
      dispatch({ type: 'DECREMENT_MONTH' });
    }
  };

  return (
    <CalendarContainer>
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
      />
    </CalendarContainer>
  );
};
