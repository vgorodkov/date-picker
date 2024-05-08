import { useMemo } from 'react';

import nextSvg from '@/assets/icons/next.svg';
import prevSvg from '@/assets/icons/prev.svg';
import { CalendarDate } from '@/components/Calendar/CalendarDate';
import { spacing } from '@/constants/spacing';
import { FlexContainer, GridContainer } from '@/styles/containers';
import { Icon } from '@/styles/icon';
import { DateVariant } from '@/types/date';
import { getWeekDays } from '@/utils/getWeekDays';

import { DatepickerTitle } from './styled';
import { CalendarHeaderProps } from './types';

export const CalendarHeader = ({
  selectNextPeriod,
  selectPrevPeriod,
  calendarYear,
  calendarMonthName,
  firstDayOfWeek,
}: CalendarHeaderProps) => {
  const weekDays = useMemo(() => {
    return getWeekDays(firstDayOfWeek);
  }, [firstDayOfWeek]);

  return (
    <FlexContainer flexFlow="column nowrap" alignItems="space-between" gap={spacing.xs}>
      <FlexContainer justifyContent="space-between">
        <Icon onClick={selectPrevPeriod} src={prevSvg} alt="prev" title="prev month" />
        <DatepickerTitle>
          {calendarMonthName} {calendarYear}
        </DatepickerTitle>
        <Icon onClick={selectNextPeriod} src={nextSvg} alt="next" title="next month" />
      </FlexContainer>
      <GridContainer>
        {weekDays.map((weekday) => (
          <CalendarDate
            withTodo={false}
            variant={DateVariant.WEEKDAY}
            date={{ day: weekday }}
            key={weekday}
          />
        ))}
      </GridContainer>
    </FlexContainer>
  );
};
