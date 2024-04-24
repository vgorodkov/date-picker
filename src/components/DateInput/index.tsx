import calendarIcon from '@/assets/icons/calendar.svg';
import clearIcon from '@/assets/icons/clear.svg';
import { Icon } from '@/components/Icon';
import { FlexContainer } from '@/styles/common';
import { spacing } from '@/styles/spacing';

import { InputContainer, InputLabel, StyledInput } from './styled';
import { DateInputProps } from './types';

export const DateInput = ({ isSelected, title, resetDate, ...props }: DateInputProps) => {
  return (
    <FlexContainer $flexFlow="column nowrap" $gap={spacing.s}>
      <InputLabel>{title}</InputLabel>
      <InputContainer $isSelected={isSelected}>
        <Icon src={calendarIcon} />
        <StyledInput type="text" {...props} />
        <Icon src={clearIcon} onClick={resetDate} />
      </InputContainer>
    </FlexContainer>
  );
};
