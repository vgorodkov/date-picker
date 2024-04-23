import React from 'react';

import nextSvg from '@/assets/icons/next.svg';
import prevSvg from '@/assets/icons/prev.svg';
import { Date } from '@/components/Date';
import { Icon } from '@/components/Icon';
import { WEEK_DAYS_FROM_MONDAY, WEEK_DAYS_FROM_SUNDAY } from '@/constants/dates';
import { FlexContainer } from '@/styles/common';
import { DateVariant } from '@/types/date';

import { DatepickerTitle } from './styled';
import { CalendarHeaderProps } from './types';

export const CalendarHeader = ({
  selectNextMonth,
  selectPrevMonth,
  calendarYear,
  calendarMonthName,
  firstDayOfWeek,
}: CalendarHeaderProps) => {
  return (
    <FlexContainer $flexFlow="column nowrap" $alignItems="space-between" $gap={4}>
      <FlexContainer $justifyContent="space-between">
        <Icon onClick={selectPrevMonth} src={prevSvg} alt="prev" title="prev month" />
        <DatepickerTitle>
          {calendarMonthName} {calendarYear}
        </DatepickerTitle>
        <Icon onClick={selectNextMonth} src={nextSvg} alt="next" title="next month" />
      </FlexContainer>
      <FlexContainer>
        {(firstDayOfWeek === 'monday' ? WEEK_DAYS_FROM_MONDAY : WEEK_DAYS_FROM_SUNDAY).map(
          (weekday) => (
            <Date variant={DateVariant.WEEKDAY} date={{ day: weekday }} />
          )
        )}
      </FlexContainer>
    </FlexContainer>
  );
};
