import styled from 'styled-components';

export const DatepickerContainer = styled.div`
  width: 250px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 10px;
`;

export const DatepickerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexContainer = styled.div<{
  $alignItems?: string;
  $justifyContent?: string;
  $flexFlow?: string;
}>`
  display: flex;
  align-items: ${(props) => props.$alignItems || 'center'};
  justify-content: ${(props) => props.$justifyContent || 'center'};
  flex-flow: ${(props) => props.$flexFlow || 'row wrap'};
`;

export const DatepickerTitle = styled.p`
  font-size: 14px;
  color: black;
  font-weight: 900;
`;
