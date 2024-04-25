import { ChangeEvent, FC, useState } from 'react';

import { Button } from '@/components/Button';
import { StyledInput } from '@/components/Input/styled';
import { Modal } from '@/components/Modal';
import { FlexContainer } from '@/styles/common';
import { spacing } from '@/styles/spacing';
import { MonthDate, PickerProps } from '@/types/date';
import { zeroPad } from '@/utils/zeroPad';

export const withTodos = (WrappedComponent: FC<PickerProps>) => {
  return ({ ...props }) => {
    const [todo, setTodo] = useState('');
    const [selectedDate, setSelectedDate] = useState<MonthDate | null>(null);
    const [isModalActive, setIsModalActive] = useState(false);

    const savedTodo = localStorage.getItem(
      `${selectedDate?.day}-${selectedDate?.month}-${selectedDate?.year}`
    );

    // const todos = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    const addTodo = (todoDate: MonthDate) => {
      setSelectedDate(todoDate);
      setIsModalActive(true);
    };

    const saveTodo = () => {
      setIsModalActive(false);

      localStorage.setItem(
        `${selectedDate?.day}-${selectedDate?.month}-${selectedDate?.year}`,
        todo
      );
      setTodo('');
    };

    return (
      <>
        <Modal isActive={isModalActive} closeModal={() => setIsModalActive(false)}>
          <FlexContainer $flexFlow="column nowrap" $alignItems="center" $gap={spacing.m}>
            <h4>
              {zeroPad(selectedDate?.day, 2)}/{zeroPad(selectedDate?.month, 2)}/{selectedDate?.year}
            </h4>
            <h5>Todo for this date:</h5>
            <p>{savedTodo ?? 'No Todos yet'}</p>
            <StyledInput
              placeholder="Enter todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <Button title="Save todo" onClick={saveTodo} />
          </FlexContainer>
        </Modal>
        <WrappedComponent {...props} addTodo={addTodo} />
      </>
    );
  };
};
