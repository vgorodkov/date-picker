import { ChangeEvent, useState } from 'react';

import { Input } from '@/components/UI';
import { colors } from '@/constants/colors';
import { DEFAULT_DAY_WITH_TIMESTAMP } from '@/constants/dates';
import { spacing } from '@/constants/spacing';
import { useStickyState } from '@/hooks/useStickyState';
import { Button } from '@/styles/button';
import { FlexContainer } from '@/styles/containers';

import { TODO_LENGTH_LIMIT } from './constants';
import { TodoModalContainer } from './styled';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { TodoModalProps } from './types';

export const TodoModal = ({ selectedDate = DEFAULT_DAY_WITH_TIMESTAMP }: TodoModalProps) => {
  const { day, month, year } = selectedDate;
  const storageKey = `${day}-${month}-${year}`;
  const [todoQuery, setTodoQuery] = useState<string>('');
  const [todos, setTodos] = useStickyState<string[]>(storageKey, []);

  const onTodoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodoQuery(value.slice(0, TODO_LENGTH_LIMIT));
  };

  const saveTodo = () => {
    if (todoQuery.length > 0) {
      setTodos([...todos, todoQuery]);
      setTodoQuery('');
    }
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <TodoModalContainer flexFlow="column nowrap" gap={spacing.l} data-testid="todo-modal">
      <TodoHeader selectedDate={selectedDate} />
      <TodoList todos={todos} />
      <FlexContainer flexFlow="column nowrap" gap={spacing.l}>
        <Input
          data-testid="todo-modal-input"
          label="Todo"
          title="Add todo"
          placeholder="Enter todo"
          value={todoQuery}
          onChange={onTodoInputChange}
        />
        <FlexContainer gap={spacing.s}>
          <Button
            data-testid="todo-modal-clear-btn"
            color={colors.disabledHolidayText}
            onClick={clearTodos}
          >
            Clear todos
          </Button>
          <Button data-testid="todo-modal-add-btn" onClick={saveTodo}>
            Save todo
          </Button>
        </FlexContainer>
      </FlexContainer>
    </TodoModalContainer>
  );
};
