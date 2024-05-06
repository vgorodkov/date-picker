import { FlexContainer } from '@/styles/common';

import { TodoListProps } from './types';

export const TodoList = ({ todos }: TodoListProps) => {
  if (!todos || todos.length < 1) {
    return (
      <FlexContainer $justifyContent="center" data-testid="todo-dummy">
        <h4>No todos yet</h4>
      </FlexContainer>
    );
  }
  return (
    <FlexContainer $flexFlow="column nowrap" data-testid="todo-list">
      {todos.map((item, index) => (
        <p key={item}>
          <b>{index + 1}. </b>
          {item}
        </p>
      ))}
    </FlexContainer>
  );
};
