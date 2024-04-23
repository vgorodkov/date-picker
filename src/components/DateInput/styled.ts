import styled from 'styled-components';

export const InputLabel = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #333333;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #bbbbbb;
  align-items: center;
  padding: 8px 15px;
  gap: 8px;
  border-radius: 8px;
`;

export const StyledInput = styled.input`
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  display: flex;
  width: 100%;
  border: none;

  &:focus {
    border: none;
    outline: none;
  }
`;
