import styled, { css } from 'styled-components';

import { DateVariant } from '@/types/date';

const variantStyles = {
  [DateVariant.DISABLED]: css`
    color: #aaaaaa;
  `,
  [DateVariant.DEFAULT]: css``,
  [DateVariant.WEEKDAY]: css`
    font-size: 14px;
    font-weight: 900;
    cursor: default;
    &:hover {
      background-color: white;
    }
  `,
};

export const StyledDate = styled.div<{ $variant?: DateVariant; $selected?: boolean }>`
  width: calc(250px / 7);
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: #333333;
  border-radius: 8px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
    color: #333333;
  }

  ${({ $variant }) => variantStyles[$variant || DateVariant.DEFAULT]}

  ${(props) =>
    props.$selected &&
    css`
      background-color: #2f80ed;
      color: white;
    `}
`;
