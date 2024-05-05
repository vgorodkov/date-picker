import styled from 'styled-components';

import { spacing } from '@/constants/spacing';

export const CalendarContainer = styled.div`
  position: absolute;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: ${spacing.sm};
  top: ${spacing.s};
  width: 100%;
  z-index: 1000;
`;
