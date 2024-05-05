import nextSvg from '@/assets/icons/next.svg';
import prevSvg from '@/assets/icons/prev.svg';
import { CalendarDate } from '@/components/Calendar/CalendarDate';
import { Icon } from '@/components/UI/Icon';
import { spacing } from '@/constants/spacing';
import { FlexContainer, GridContainer } from '@/styles/common';
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
  return (
    <FlexContainer $flexFlow="column nowrap" $alignItems="space-between" $gap={spacing.xs}>
      <FlexContainer $justifyContent="space-between">
        <Icon onClick={selectPrevPeriod} src={prevSvg} alt="prev" title="prev month" />
        <DatepickerTitle>
          {calendarMonthName} {calendarYear}
        </DatepickerTitle>
        <Icon onClick={selectNextPeriod} src={nextSvg} alt="next" title="next month" />
      </FlexContainer>
      <GridContainer>
        {getWeekDays(firstDayOfWeek).map((weekday) => (
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
