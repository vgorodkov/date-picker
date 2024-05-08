import styled, { css } from 'styled-components';

import { DateVariant } from '@/types/date';
import { RangeVariant } from '@/types/range';

const variantStyles = {
  [DateVariant.DISABLED]: css`
    color: ${({ theme }) => theme.colors.disabledText};
  `,
  [DateVariant.DEFAULT]: css``,
  [DateVariant.WEEKDAY]: css`
    font-size: 14px;
    font-weight: 900;
    cursor: default;
    &:hover {
      background-color: ${({ theme }) => theme.colors.onPrimary};
    }
  `,
  [DateVariant.HOLIDAY]: css`
    color: ${({ theme }) => theme.colors.holidayText};
  `,
  [DateVariant.DISABLED_HOLIDAY]: css`
    color: ${({ theme }) => theme.colors.disabledHolidayText};
  `,
};

const rangeStyles = {
  [RangeVariant.START]: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `,
  [RangeVariant.INBETWEEN]: css`
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: 0;
  `,
  [RangeVariant.END]: css`
    background-color: ${({ theme }) => theme.colors.primary};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    color: ${({ theme }) => theme.colors.onPrimary};
  `,
};

export const Date = styled.div<{
  variant: DateVariant;
  selected: boolean;
  range?: RangeVariant;
  withTodo?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryText};
  flex-grow: 1;
  aspect-ratio: 1;
  border-radius: 8px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryText};
    background-color: ${({ theme }) => theme.colors.border};
  }

  ${({ variant }) => variantStyles[variant || DateVariant.DEFAULT]}
  ${({ range }) => (range ? rangeStyles[range] : '')}

  ${(props) =>
    props.selected &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.onPrimary};
    `}
    ${(props) =>
    props.withTodo &&
    css`
      text-decoration: underline;
    `}
`;
