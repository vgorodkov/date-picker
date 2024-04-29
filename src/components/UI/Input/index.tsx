import { spacing } from '@/constants/spacing';
import { FlexContainer } from '@/styles/common';

import { StyledInput, StyledLabel } from './styled';
import { InputProps } from './types';

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <FlexContainer $flexFlow="column nowrap" $gap={spacing.xs}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput name="input" type="text" {...props} />
    </FlexContainer>
  );
};
