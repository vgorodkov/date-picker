import '@/globals.scss';

import React, { useState } from 'react';

import nextSvg from '@/assets/icons/next.svg';
import prevSvg from '@/assets/icons/prev.svg';
import { CURRENT_DAY, CURRENT_MONTH, CURRENT_YEAR, MONTHS, WEEK_DAYS } from '@/constants/dates';
import { DateVariant } from '@/types/date';
import { getMonthDates } from '@/utils/getMonthDates';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

import { Date } from '../Date';
import { Icon } from '../Icon';
import { DatepickerContainer, DatepickerTitle, FlexContainer } from './styled';
import { DatepickerProps } from './types';

export const Datepicker = ({ month = CURRENT_MONTH, year = CURRENT_YEAR }: DatepickerProps) => {
  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedYear, setSelectedYear] = useState(year);

  const monthDates = getMonthDates(selectedYear, selectedMonth);
  const monthName = selectedMonth === 0 ? MONTHS[selectedMonth] : MONTHS[selectedMonth - 1];

  const selectNextMonth = () => {
    const isLastMonth = selectedMonth === MONTHS.length;
    const nextMonth = isLastMonth ? 1 : selectedMonth + 1;
    const nextYear = isLastMonth ? selectedYear + 1 : selectedYear;
    setSelectedMonth(nextMonth);
    setSelectedYear(nextYear);
  };

  const selectPrevMonth = () => {
    const isFirstMonth = selectedMonth === 1;
    const nextMonth = isFirstMonth ? MONTHS.length : selectedMonth - 1;
    const nextYear = isFirstMonth ? selectedYear - 1 : selectedYear;
    setSelectedMonth(nextMonth);
    setSelectedYear(nextYear);
  };

  return (
    <DatepickerContainer>
      <FlexContainer $justifyContent="space-between">
        <Icon onClick={selectPrevMonth} src={prevSvg} alt="prev" title="prev month" />
        <DatepickerTitle>
          {monthName} {selectedYear}
        </DatepickerTitle>
        <Icon onClick={selectNextMonth} src={nextSvg} alt="next" title="next month" />
      </FlexContainer>
      <FlexContainer>
        {WEEK_DAYS.map((weekday) => (
          <Date variant={DateVariant.WEEKDAY} date={{ day: weekday }} />
        ))}
      </FlexContainer>
      <FlexContainer>
        {monthDates.map((date) => (
          <Date
            selected={
              getTimestampByDate(date.year, date.month, date.day) ===
              getTimestampByDate(CURRENT_YEAR, CURRENT_MONTH, CURRENT_DAY)
            }
            date={date}
            variant={date.month === selectedMonth ? DateVariant.DEFAULT : DateVariant.DISABLED}
          />
        ))}
      </FlexContainer>
    </DatepickerContainer>
  );
};
