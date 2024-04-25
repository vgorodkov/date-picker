import { StyledButton } from './styled';
import { ButtonProps } from './types';

export const Button = ({ title, onClick, disabled = false, ...props }: ButtonProps) => {
  const handleBtnClick = () => {
    onClick();
  };

  return (
    <StyledButton disabled={disabled} type="button" onClick={handleBtnClick} {...props}>
      {title}
    </StyledButton>
  );
};
