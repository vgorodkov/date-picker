import { ChangeEvent, useState } from 'react';

import { Button, Input } from '@/components/UI';
import { spacing } from '@/constants/spacing';
import { FlexContainer } from '@/styles/common';

import { TodoModalHeader } from './TodoModalHeader';
import { TodoModalProps } from './types';

export const TodoModal = ({ selectedDate }: TodoModalProps) => {
  const [todo, setTodo] = useState('');

  const saveTodo = () => {
    localStorage.setItem(`${selectedDate?.day}-${selectedDate?.month}-${selectedDate?.year}`, todo);
    setTodo('');
  };

  const onTodoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <FlexContainer $flexFlow="column nowrap" $gap={spacing.l}>
      <TodoModalHeader selectedDate={selectedDate} />
      <Input
        label="Todo"
        title="Add todo"
        placeholder="Enter todo"
        value={todo}
        onChange={onTodoInputChange}
      />
      <Button title="Save todo" onClick={saveTodo} />
    </FlexContainer>
  );
};
