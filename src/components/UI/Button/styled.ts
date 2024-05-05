import styled, { css } from 'styled-components';

import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

const DISABLED = css`
  pointer-events: none;
  background-color: gray;
  color: lightgray;
`;

export const StyledButton = styled.button<{ disabled: boolean; color?: string }>`
  display: flex;
  flex-grow: 1;
  background-color: ${(props) => props.color || colors.primary};
  border: none;
  color: ${colors.onPrimary};
  padding: ${spacing.s} ${spacing.m};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 8px;
  transition: 0.2s;
  cursor: pointer;
  color: ${colors.onPrimary};
  font-size: 14px;
  font-weight: 700;
  ${(props) => props.disabled && DISABLED}

  &:hover {
    transition: 0.2s;
    opacity: 0.8;
  }
`;
