import styled from 'styled-components';

export const CalendarContainer = styled.div`
  position: absolute;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.sm};
  top: ${({ theme }) => theme.spacing.s};
  width: 100%;
  z-index: 1000;
`;
