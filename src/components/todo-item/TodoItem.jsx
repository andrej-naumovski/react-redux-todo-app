// @flow
import * as React from 'react';
import styled from 'styled-components';

import type { TodoItem as TodoItemType } from '../../types';
import { TodoState } from '../../constants/todos';

const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  background: green;
  color: #fff;

  &:disabled {
    background: white;
  }
`;

type Props = {
  item: TodoItemType,
};

const TodoItem = ({ item }: Props): React.Node => (
  <TodoItemContainer>
    <input type="checkbox" value={item.isChecked} />
    <span>{item.title}</span>
    <span>{item.state}</span>
    <SubmitButton type="button" disabled={item.state === TodoState.COMPLETED}>
      Mark as complete
    </SubmitButton>
    <button type="button">Delete</button>
  </TodoItemContainer>
);

export default TodoItem;
