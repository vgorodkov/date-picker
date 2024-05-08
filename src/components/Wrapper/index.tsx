import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { theme } from '@/constants/theme';
import { GlobalStyle } from '@/styles/global';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <ErrorBoundary>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ErrorBoundary>
    </>
  );
};
