import { StyledInput } from './styled';
import { InputProps } from './types';

export const Input = ({ ...props }: InputProps) => {
  return <StyledInput type="text" {...props} />;
};
