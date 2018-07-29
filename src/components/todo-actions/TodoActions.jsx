// @flow
import * as React from 'react';
import styled from 'styled-components';

import Button from '../button/Button';

const TodoActionsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

type Props = {
  onAdd: () => void,
  onMarkAllComplete: () => void,
  onDeleteAll: () => void,
};

const TodoActions = ({
  onAdd,
  onMarkAllComplete,
  onDeleteAll,
}: Props): React.Node => (
  <TodoActionsContainer>
    <Button look={Button.look.SUBMIT} onClick={onAdd}>
      Add new todo
    </Button>
    <Button look={Button.look.DEFAULT} onClick={onMarkAllComplete}>
      Mark all as complete
    </Button>
    <Button look={Button.look.DELETE} onClick={onDeleteAll}>
      Delete all todos
    </Button>
  </TodoActionsContainer>
);

export default TodoActions;
