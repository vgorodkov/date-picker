import { StyledButton } from './styled';
import { ButtonProps } from './types';

export const Button = ({ title, color, disabled, ...props }: ButtonProps) => {
  return (
    <StyledButton $disabled={disabled} $color={color} type="button" {...props}>
      {title}
    </StyledButton>
  );
};
