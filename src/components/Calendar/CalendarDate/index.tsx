import { DateVariant, MonthDate, Weekday } from '@/types/date';
import { isDateHasTodo } from '@/utils/isDateHasTodo';

import { Date } from './styled';
import { DateProps } from './types';

export const CalendarDate = ({
  date,
  variant = DateVariant.DEFAULT,
  isSelected = false,
  onDateClick,
  rangeVariant,
  withTodo,
  holidayColor,
}: DateProps) => {
  const handleDateClick = () => {
    if (variant !== DateVariant.WEEKDAY && onDateClick) {
      onDateClick(date as MonthDate);
    }
  };

  const getDateTestId = () => {
    if (variant === DateVariant.WEEKDAY) {
      const { day } = date as Weekday;
      return `calendar-date-${day}`;
    }
    const { day, month } = date as MonthDate;
    return `calendar-date-${day}-${month}`;
  };

  return (
    <Date
      data-testid={getDateTestId()}
      withTodo={withTodo && isDateHasTodo(date as MonthDate, variant)}
      range={rangeVariant}
      variant={variant}
      selected={isSelected}
      onClick={handleDateClick}
      holidayColor={holidayColor}
    >
      {date.day}
    </Date>
  );
};
