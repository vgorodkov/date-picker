import { FlexContainer } from '@/styles/common';

import { TodoListProps } from './types';

export const TodoList = ({ todos }: TodoListProps) => {
  if (!todos || todos.length < 1) {
    return (
      <FlexContainer $justifyContent="center">
        <h4>No todos yet</h4>
      </FlexContainer>
    );
  }
  return (
    <FlexContainer $flexFlow="column nowrap">
      {todos.map((item, index) => (
        <p key={item}>
          <b>{index + 1}. </b>
          {item}
        </p>
      ))}
    </FlexContainer>
  );
};
