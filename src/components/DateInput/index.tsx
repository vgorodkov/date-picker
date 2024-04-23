import React, { InputHTMLAttributes } from 'react';

import calendarIcon from '@/assets/icons/calendar.svg';
import clearIcon from '@/assets/icons/clear.svg';
import { FlexContainer } from '@/styles/common';

import { Icon } from '../Icon';
import { InputContainer, InputLabel, StyledInput } from './styled';

interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  resetDate: () => void;
}

export const DateInput = ({ title, resetDate, ...props }: DateInputProps) => {
  return (
    <FlexContainer $flexFlow="column nowrap" $alignItems="flex-start" $gap={8}>
      <InputLabel>{title}</InputLabel>
      <InputContainer>
        <Icon src={calendarIcon} />
        <StyledInput type="text" {...props} />

        <Icon src={clearIcon} onClick={resetDate} />
      </InputContainer>
    </FlexContainer>
  );
};
