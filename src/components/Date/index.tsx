import React from 'react';

import { DateVariant } from '@/types/date';

import { StyledDate } from './styled';
import { DateProps } from './types';

export const Date = ({ date, variant = DateVariant.DEFAULT, selected = false }: DateProps) => {
  return (
    <StyledDate $variant={variant} $selected={selected}>
      {date.day}
    </StyledDate>
  );
};
