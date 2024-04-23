import React from 'react';

import { DateVariant, MonthDate } from '@/types/date';

import { StyledDate } from './styled';
import { DateProps } from './types';

export const Date = ({
  date,
  variant = DateVariant.DEFAULT,
  isSelected = false,
  selectDate,
}: DateProps) => {
  const onDateClick = () => {
    if (variant !== DateVariant.WEEKDAY && selectDate) {
      const { day, month, year } = date as MonthDate;
      selectDate({ day, month, year });
    }
  };

  return (
    <StyledDate $variant={variant} $selected={isSelected} onClick={onDateClick}>
      {date.day}
    </StyledDate>
  );
};
