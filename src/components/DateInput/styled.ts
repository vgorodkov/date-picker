import styled, { css } from 'styled-components';

import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export const InputLabel = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.primaryText};
`;

export const InputContainer = styled.div<{ $isSelected?: boolean; $isDateValid?: boolean }>`
  display: flex;
  border: 1px solid ${colors.border};
  align-items: center;
  padding: ${spacing.s} ${spacing.m};
  gap: ${spacing.s};
  border-radius: 8px;
  ${(props) =>
    props.$isSelected
      ? css`
          border-color: ${props.$isDateValid ? colors.primary : colors.holidayText};
        `
      : css`
          border-color: ${colors.border};
        `}
`;

export const StyledInput = styled.input`
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
