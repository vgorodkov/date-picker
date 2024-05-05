import { FlexContainer } from '@/styles/common';
import { zeroPad } from '@/utils/zeroPad';

import { TodoHeaderProps } from './types';

export const TodoHeader = ({ selectedDate }: TodoHeaderProps) => {
  if (!selectedDate) {
    return <h4>No selected date</h4>;
  }

  return (
    <FlexContainer $justifyContent="center">
      <h3>
        {zeroPad(selectedDate?.day, 2)}/{zeroPad(selectedDate?.month, 2)}/{selectedDate?.year}
      </h3>
    </FlexContainer>
  );
};
