import { DateVariant, MonthDate } from '@/types/date';

import { StyledDate } from './styled';
import { DateProps } from './types';

export const CalendarDate = ({
  date,
  variant = DateVariant.DEFAULT,
  isSelected = false,
  onDateClick,
  rangeVariant,
  withTodo,
}: DateProps) => {
  const handleDateClick = () => {
    if (variant !== DateVariant.WEEKDAY && onDateClick) {
      onDateClick(date as MonthDate);
    }
  };

  const hasTodo =
    variant !== DateVariant.WEEKDAY
      ? localStorage.getItem(`${date?.day}-${date?.month}-${date?.year}`)
      : false;

  return (
    <StyledDate
      $withTodo={withTodo && !!hasTodo}
      $range={rangeVariant}
      $variant={variant}
      $selected={isSelected}
      onClick={handleDateClick}
    >
      {date.day}
    </StyledDate>
  );
};
