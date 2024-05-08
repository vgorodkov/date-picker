import styled, { css } from 'styled-components';

import { DateVariant } from '@/types/date';
import { RangeVariant } from '@/types/range';

const getVariantStyle = (variant: DateVariant, holidayColor?: string) => {
  switch (variant) {
    case DateVariant.DEFAULT:
      return '';
    case DateVariant.DISABLED:
      return css`
        color: ${({ theme }) => theme.colors.disabledText};
      `;
    case DateVariant.WEEKDAY:
      return css`
        font-size: 14px;
        font-weight: 900;
        cursor: default;
        &:hover {
          background-color: ${({ theme }) => theme.colors.onPrimary};
        }
      `;
    case DateVariant.HOLIDAY:
      return css`
        color: ${({ theme }) => holidayColor || theme.colors.holidayText};
      `;
    case DateVariant.DISABLED_HOLIDAY:
      return css`
        color: ${({ theme }) => holidayColor || theme.colors.holidayText};
        opacity: 0.5;
      `;
    default:
      return '';
  }
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
  holidayColor?: string;
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

  ${({ variant, holidayColor }) => getVariantStyle(variant, holidayColor)}
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
