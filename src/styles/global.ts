import { createGlobalStyle } from 'styled-components';

import boldFont from '@/assets/fonts/OpenSans-Bold.ttf';
import regularFont from '@/assets/fonts/OpenSans-Regular.ttf';
import semiboldFont from '@/assets/fonts/OpenSans-SemiBold.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url(${regularFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${boldFont}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${semiboldFont}) format('truetype');
    font-weight: 600; 
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans';
  }
`;
