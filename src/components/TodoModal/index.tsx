import { ChangeEvent, useState } from 'react';

import { Button, Input } from '@/components/UI';
import { colors } from '@/constants/colors';
import { DEFAULT_DAY_WITH_TIMESTAMP } from '@/constants/dates';
import { spacing } from '@/constants/spacing';
import { useTodosFromStorageByDate } from '@/hooks/useTodosFromStorageByDate';
import { FlexContainer } from '@/styles/common';

import { TODO_LENGTH_LIMIT } from './constants';
import { TodoModalContainer } from './styled';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { TodoModalProps } from './types';

export const TodoModal = ({ selectedDate = DEFAULT_DAY_WITH_TIMESTAMP }: TodoModalProps) => {
  const [todoQuery, setTodoQuery] = useState<string>('');

  const { todos, addTodo, clearTodos } = useTodosFromStorageByDate(selectedDate);

  const onTodoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodoQuery(value.slice(0, TODO_LENGTH_LIMIT));
  };

  const saveTodo = () => {
    if (todoQuery.length > 0) {
      addTodo(todoQuery);
      setTodoQuery('');
    }
  };

  return (
    <TodoModalContainer $flexFlow="column nowrap" $gap={spacing.l} data-testid="todo-modal">
      <TodoHeader selectedDate={selectedDate} />
      <TodoList todos={todos} />
      <FlexContainer $flexFlow="column nowrap" $gap={spacing.l}>
        <Input
          data-testid="todo-modal-input"
          label="Todo"
          title="Add todo"
          placeholder="Enter todo"
          value={todoQuery}
          onChange={onTodoInputChange}
        />
        <FlexContainer $gap={spacing.s}>
          <Button
            data-testid="todo-modal-clear-btn"
            color={colors.disabledHolidayText}
            title="Clear todos"
            onClick={clearTodos}
          />
          <Button data-testid="todo-modal-add-btn" title="Save todo" onClick={saveTodo} />
        </FlexContainer>
      </FlexContainer>
    </TodoModalContainer>
  );
};
