import styled from 'styled-components';

export const FlexContainer = styled.div<{
  $alignItems?: string;
  $justifyContent?: string;
  $flexFlow?: string;
  $gap?: number;
}>`
  display: flex;
  position: relative;
  align-items: ${(props) => props.$alignItems || 'center'};
  justify-content: ${(props) => props.$justifyContent || 'center'};
  flex-flow: ${(props) => props.$flexFlow || 'row wrap'};
  gap: ${(props) => `${props.$gap}px` || 0};
`;
