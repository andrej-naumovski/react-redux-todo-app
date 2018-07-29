// @flow
import * as React from 'react';
import styled from 'styled-components';

import TodoItem from '../todo-item/TodoItem';

import type { TodoItem as TodoItemType } from '../../types';

type Props = {
  todos: Array<TodoItemType>,
};

const Container = styled.div`
  width: 100%;
`;

const TodoList = ({ todos }: Props): React.Node => (
  <Container>
    {todos.map((todo, index) => (
      <TodoItem item={todo} shaded={index % 2 === 0} />
    ))}
  </Container>
);

export default TodoList;
