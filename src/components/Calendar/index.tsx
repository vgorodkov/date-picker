import React, { useMemo, useState } from 'react';

import { CalendarDates } from '@/components/CalendarDates';
import { CalendarHeader } from '@/components/CalendarHeader';
import { CURRENT_MONTH, CURRENT_YEAR, MONTHS } from '@/constants/dates';

import { CalendarContainer } from './styled';
import { CalendarProps } from './types';

export const Calendar = ({ selectedDate, selectDate, firstDayOfWeek }: CalendarProps) => {
  const [calendarMonth, setCalendarMonth] = useState(CURRENT_MONTH);
  const [calendarYear, setCalendarYear] = useState(CURRENT_YEAR);

  const calendarMonthName = useMemo(
    () => (calendarMonth === 0 ? MONTHS[calendarMonth] : MONTHS[calendarMonth - 1]),
    [calendarMonth]
  );

  const selectNextMonth = () => {
    const isLastMonth = calendarMonth === MONTHS.length;
    const nextMonth = isLastMonth ? 1 : calendarMonth + 1;
    const nextYear = isLastMonth ? calendarYear + 1 : calendarYear;
    setCalendarMonth(nextMonth);
    setCalendarYear(nextYear);
  };

  const selectPrevMonth = () => {
    const isFirstMonth = calendarMonth === 1;
    const nextMonth = isFirstMonth ? MONTHS.length : calendarMonth - 1;
    const nextYear = isFirstMonth ? calendarYear - 1 : calendarYear;
    setCalendarMonth(nextMonth);
    setCalendarYear(nextYear);
  };

  return (
    <CalendarContainer>
      <CalendarHeader
        selectNextMonth={selectNextMonth}
        selectPrevMonth={selectPrevMonth}
        calendarMonthName={calendarMonthName}
        calendarYear={calendarYear}
        firstDayOfWeek={firstDayOfWeek}
      />
      <CalendarDates
        firstDayOfWeek={firstDayOfWeek}
        calendarMonth={calendarMonth}
        calendarYear={calendarYear}
        selectDate={selectDate}
        selectedDate={selectedDate}
      />
    </CalendarContainer>
  );
};
