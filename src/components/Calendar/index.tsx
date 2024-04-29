import { useEffect, useReducer } from 'react';

import { CalendarContent } from '@/components/Calendar/CalendarContent';
import { CalendarHeader } from '@/components/Calendar/CalendarHeader';
import { CURRENT_DAY, CURRENT_MONTH, CURRENT_YEAR, MONTHS, WEEK_DAYS } from '@/constants/dates';
import { getMonthDates } from '@/utils/getMonthDates';
import { geetWeekDatesByWeekIndex } from '@/utils/getWeekDates';

import { calendarReducer } from './reducer';
import { CalendarContainer } from './styled';
import { CalendarProps, CalendarState } from './types';

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
}: CalendarProps) => {
  const initialState: CalendarState = {
    calendarMonth: selectedDate?.month ?? CURRENT_MONTH,
    calendarYear: selectedDate?.year ?? CURRENT_YEAR,
    weekIndex: Math.floor(CURRENT_DAY / WEEK_DAYS.length),
  };

  const [{ calendarMonth, calendarYear, weekIndex }, dispatch] = useReducer(
    calendarReducer,
    initialState
  );

  useEffect(() => {
    if (selectedDate) {
      dispatch({ type: 'SET_DATE', payload: selectedDate });
    }
  }, [selectedDate]);

  const isWeekMode = calendarVariant === 'week';
  const calendarMonthName = calendarMonth === 0 ? MONTHS[calendarMonth] : MONTHS[calendarMonth - 1];
  const monthDates = getMonthDates(calendarYear, calendarMonth, firstDayOfWeek);
  const dates = isWeekMode ? geetWeekDatesByWeekIndex(monthDates, weekIndex) : monthDates;

  // TODO: вынести в константы
  const selectNextPeriod = () => {
    if (isWeekMode) {
      dispatch({ type: 'INCREMENT_WEEK', payload: monthDates });
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
