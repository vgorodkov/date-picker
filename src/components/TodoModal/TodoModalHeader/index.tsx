import { spacing } from '@/constants/spacing';
import { FlexContainer } from '@/styles/common';
import { zeroPad } from '@/utils/zeroPad';

import { TodoModalHeaderProps } from './types';

export const TodoModalHeader = ({ selectedDate }: TodoModalHeaderProps) => {
  if (!selectedDate) {
    return <h4>No selected date</h4>;
  }

  const savedTodo = localStorage.getItem(
    `${selectedDate?.day}-${selectedDate?.month}-${selectedDate?.year}`
  );

  return (
    <FlexContainer $flexFlow="column nowrap" $gap={spacing.s} $alignItems="center">
      <h5>
        {zeroPad(selectedDate?.day, 2)}/{zeroPad(selectedDate?.month, 2)}/{selectedDate?.year}
      </h5>
      <h3>{savedTodo ?? 'No Todos yet'}</h3>
    </FlexContainer>
  );
};
