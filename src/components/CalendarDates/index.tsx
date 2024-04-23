import React from 'react';

import { Date } from '@/components/Date';
import { FlexContainer } from '@/styles/common';
import { DateVariant, MonthDate } from '@/types/date';
import { getMonthDates } from '@/utils/getMonthDates';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

import { CalendarDatesProps } from './types';

export const CalendarDates = ({
  calendarMonth,
  calendarYear,
  selectDate,
  selectedDate,
  firstDayOfWeek,
}: CalendarDatesProps) => {
  const monthDates = getMonthDates(calendarYear, calendarMonth, firstDayOfWeek);

  const isDateSelected = (date: MonthDate) => {
    if (selectedDate) {
      return getTimestampByDate(date) === getTimestampByDate(selectedDate);
    }
    return false;
  };

  return (
    <FlexContainer>
      {monthDates.map((date) => (
        <Date
          selectDate={selectDate}
          isSelected={isDateSelected(date)}
          date={date}
          variant={date.month === calendarMonth ? DateVariant.DEFAULT : DateVariant.DISABLED}
        />
      ))}
    </FlexContainer>
  );
};
