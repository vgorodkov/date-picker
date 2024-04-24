import { DateVariant, MonthDate } from '@/types/date';

import { StyledDate } from './styled';
import { DateProps } from './types';

export const CalendarDate = ({
  date,
  variant = DateVariant.DEFAULT,
  isSelected = false,
  onDateClick,
  rangeVariant,
}: DateProps) => {
  const handleDateClick = () => {
    if (variant !== DateVariant.WEEKDAY && onDateClick) {
      onDateClick(date as MonthDate);
    }
  };

  return (
    <StyledDate
      $range={rangeVariant}
      $variant={variant}
      $selected={isSelected}
      onClick={handleDateClick}
    >
      {date.day}
    </StyledDate>
  );
};
