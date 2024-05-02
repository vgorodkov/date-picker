import { FlexContainer } from '@/styles/common';
import { zeroPad } from '@/utils/zeroPad';

import { TodoModalHeaderProps } from './types';

export const TodoModalHeader = ({ selectedDate }: TodoModalHeaderProps) => {
  if (!selectedDate) {
    return <h4>No selected date</h4>;
  }

  return (
    <FlexContainer $justifyContent="center">
      <h5>
        {zeroPad(selectedDate?.day, 2)}/{zeroPad(selectedDate?.month, 2)}/{selectedDate?.year}
      </h5>
    </FlexContainer>
  );
};
