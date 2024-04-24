import styled from 'styled-components';

export const FlexContainer = styled.div<{
  $alignItems?: string;
  $justifyContent?: string;
  $flexFlow?: string;
  $gap?: string;
}>`
  display: flex;
  align-items: ${(props) => props.$alignItems || 'stretch'};
  justify-content: ${(props) => props.$justifyContent || 'flex-start'};
  flex-flow: ${(props) => props.$flexFlow || 'row wrap'};
  gap: ${(props) => props.$gap || 0};
`;

export const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
