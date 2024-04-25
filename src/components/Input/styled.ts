import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { spacing } from '@/styles/spacing';

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
