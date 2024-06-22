import styled, { css } from 'styled-components';

export const InputContainer = styled.div<{ isSelected?: boolean; isDateValid?: boolean }>`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.border};
  align-items: center;
  padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.m};
  gap: ${({ theme }) => theme.spacing.s};
  border-radius: 8px;
  ${({ isSelected, isDateValid, theme }) =>
    isSelected
      ? css`
          border-color: ${isDateValid ? theme.colors.primary : theme.colors.holidayText};
        `
      : css`
          border-color: ${theme.colors.border};
        `}
`;

export const InputField = styled.input`
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  display: flex;
  border: none;
  font-size: 15px;
  font-weight: 400;
  &:focus {
    border: none;
    outline: none;
  }
`;
