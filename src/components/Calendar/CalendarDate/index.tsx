import { DateVariant, MonthDate } from '@/types/date';
import { getDateTestId } from '@/utils/getDateTestId';
import { isDateHasTodo } from '@/utils/isDateHasTodo';

import { Date } from './styled';
import { DateProps } from './types';

export const CalendarDate = ({
  date,
  variant = DateVariant.DEFAULT,
  isSelected = false,
  onDateClick,
  rangeVariant,
  withTodo = false,
  holidayColor,
}: DateProps) => {
  const handleDateClick = () => {
    if (onDateClick && variant !== DateVariant.WEEKDAY) {
      onDateClick(date as MonthDate);
    }
  };

  return (
    <Date
      data-testid={getDateTestId(date, variant)}
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
