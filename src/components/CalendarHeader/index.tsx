import nextSvg from '@/assets/icons/next.svg';
import prevSvg from '@/assets/icons/prev.svg';
import { CalendarDate } from '@/components/CalendarDate';
import { Icon } from '@/components/Icon';
import { FlexContainer, GridContainer } from '@/styles/common';
import { spacing } from '@/styles/spacing';
import { DateVariant } from '@/types/date';
import { getWeekDays } from '@/utils/getWeekDays';

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
    <FlexContainer $flexFlow="column nowrap" $alignItems="space-between" $gap={spacing.xs}>
      <FlexContainer $justifyContent="space-between">
        <Icon onClick={selectPrevMonth} src={prevSvg} alt="prev" title="prev month" />
        <DatepickerTitle>
          {calendarMonthName} {calendarYear}
        </DatepickerTitle>
        <Icon onClick={selectNextMonth} src={nextSvg} alt="next" title="next month" />
      </FlexContainer>
      <GridContainer>
        {getWeekDays(firstDayOfWeek).map((weekday) => (
          <CalendarDate variant={DateVariant.WEEKDAY} date={{ day: weekday }} />
        ))}
      </GridContainer>
    </FlexContainer>
  );
};
