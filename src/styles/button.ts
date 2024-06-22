import styled, { css } from 'styled-components';

const DISABLED = css`
  pointer-events: none;
  background-color: gray;
  color: lightgray;
`;

export const Button = styled.button<{ disabled?: boolean; color?: string }>`
  display: flex;
  flex-grow: 1;
  background-color: ${(props) => props.color || props.theme.colors.primary};
  border: none;
  color: ${({ theme }) => theme.colors.onPrimary};
  padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.m};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 8px;
  transition: 0.2s;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  ${(props) => props.disabled && DISABLED}

  &:hover {
    transition: 0.2s;
    opacity: 0.8;
  }
`;
