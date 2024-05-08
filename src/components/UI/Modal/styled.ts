import styled from 'styled-components';

export const ModalContainer = styled.div<{ $isActive: boolean }>`
  height: 100vh;
  width: 100vw;
  background-color: #00000070;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  pointer-events: ${(props) => (props.$isActive ? 'all' : 'none')};
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: 0.3s;
`;

export const ModalContent = styled.div`
  padding: ${({ theme }) => theme.spacing.m} ${({ theme }) => theme.spacing.l};
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
`;
