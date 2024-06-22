import styled from 'styled-components';

export const InputField = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.m};
  gap: ${({ theme }) => theme.spacing.s};
  border-radius: 8px;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const InputLabel = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryText};
`;
