import { spacing } from '@/constants/spacing';
import { FlexContainer } from '@/styles/containers';

import { InputField, InputLabel } from './styled';
import { InputProps } from './types';

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <FlexContainer flexFlow="column nowrap" gap={spacing.xs}>
      <InputLabel>{label}</InputLabel>
      <InputField name="input" type="text" {...props} />
    </FlexContainer>
  );
};
