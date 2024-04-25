import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { spacing } from '@/styles/spacing';

export const InputLabel = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.primaryText};
`;

export const InputContainer = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  border: 1px solid #bbbbbb;
  border-color: ${(props) => (props.$isSelected ? colors.primary : colors.border)};
  align-items: center;
  padding: ${spacing.s} ${spacing.m};
  gap: ${spacing.s};
  border-radius: 8px;
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
