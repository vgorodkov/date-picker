import styled, { css } from 'styled-components';

import { colors } from '@/constants/colors';
import { DateVariant } from '@/types/date';
import { RangeVariant } from '@/types/range';

const variantStyles = {
  [DateVariant.DISABLED]: css`
    color: ${colors.disabledText};
  `,
  [DateVariant.DEFAULT]: css``,
  [DateVariant.WEEKDAY]: css`
    font-size: 14px;
    font-weight: 900;
    cursor: default;
    &:hover {
      background-color: ${colors.onPrimary};
    }
  `,
  [DateVariant.HOLIDAY]: css`
    color: ${colors.holidayText};
  `,
  [DateVariant.DISABLED_HOLIDAY]: css`
    color: ${colors.disabledHolidayText};
  `,
};

const rangeStyles = {
  [RangeVariant.START]: css`
    background-color: ${colors.secondary};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `,
  [RangeVariant.INBETWEEN]: css`
    background-color: ${colors.tertiary};
    border-radius: 0;
  `,
  [RangeVariant.END]: css`
    background-color: ${colors.primary};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    color: ${colors.onPrimary};
  `,
};

export const StyledDate = styled.div<{
  $variant?: DateVariant;
  $selected?: boolean;
  $range?: RangeVariant;
  $withTodo?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${colors.primaryText};
  flex-grow: 1;
  aspect-ratio: 1;
  border-radius: 8px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${colors.border};
    color: ${colors.primaryText};
  }

  ${({ $variant }) => variantStyles[$variant || DateVariant.DEFAULT]}
  ${({ $range }) => ($range ? rangeStyles[$range] : '')}

  ${(props) =>
    props.$selected &&
    css`
      background-color: ${colors.primary};
      color: ${colors.onPrimary};
    `}
    ${(props) =>
    props.$withTodo &&
    css`
      text-decoration: underline;
    `}
`;
