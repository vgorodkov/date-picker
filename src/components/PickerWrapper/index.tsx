import { ReactNode } from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { GlobalStyle } from '@/styles/global';

import { Wrapper } from './styled';

export const PickerWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <ErrorBoundary>{children}</ErrorBoundary>
    </Wrapper>
  );
};
