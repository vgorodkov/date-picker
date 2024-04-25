import styled, { css } from 'styled-components';

import { colors } from '@/styles/colors';
import { spacing } from '@/styles/spacing';

const DISABLED = css`
  pointer-events: none;
  background-color: gray;
  color: lightgray;
`;

export const StyledButton = styled.button<{ disabled: boolean }>`
  display: flex;
  flex-grow: 1;
  background-color: ${colors.primary};
  border: none;
  color: ${colors.onPrimary};
  padding: ${spacing.s} ${spacing.m};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 4px;
  transition: 0.2s;
  cursor: pointer;

  ${(props) => props.disabled && DISABLED}

  &:hover {
    transition: 0.2s;
    opacity: 0.8;
  }
`;
