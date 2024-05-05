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

  const isDateHasTodo = () => {
    if (variant === DateVariant.WEEKDAY) {
      return false;
    }

    const { day, month, year } = date as MonthDate;

    return !!localStorage.getItem(`${day}-${month}-${year}`);
  };

  return (
    <StyledDate
      $withTodo={withTodo && isDateHasTodo()}
      $range={rangeVariant}
      $variant={variant}
      $selected={isSelected}
      onClick={handleDateClick}
    >
      {date.day}
    </StyledDate>
  );
};
