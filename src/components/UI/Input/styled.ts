import styled from 'styled-components';

import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export const StyledInput = styled.input`
  border: 1px solid ${colors.border};
  padding: ${spacing.s} ${spacing.m};
  gap: ${spacing.s};
  border-radius: 8px;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;
