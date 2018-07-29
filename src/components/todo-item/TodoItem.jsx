// @flow
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import type { TodoItem as TodoItemType } from '../../types';
import { TodoState } from '../../constants/todos';

import {
  markTodoAsComplete,
  deleteTodo as deleteTodoAction,
} from '../../actions/todos';

import Button from '../button/Button';

const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #828282;
  background-color: ${ifProp('shaded', '#ceccc6', 'transparent')};
`;

const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

const PercentageWidth = styled.span`
  width: 25%;
`;

type Props = {
  item: TodoItemType,
  shaded: boolean,
  markAsComplete: number => void,
  deleteTodo: number => void,
};

const TodoItem = ({
  item,
  shaded,
  markAsComplete,
  deleteTodo,
}: Props): React.Node => {
  const onMarkAsCompleteClick = () => {
    markAsComplete(item.id);
  };

  const onDelete = () => {
    deleteTodo(item.id);
  };

  return (
    <TodoItemContainer shaded={shaded}>
      <PercentageWidth>{item.title}</PercentageWidth>
      <span>{item.state}</span>
      <ButtonContainer>
        <Button
          look={Button.look.SUBMIT}
          disabled={item.state === TodoState.COMPLETED}
          onClick={onMarkAsCompleteClick}
        >
          Mark as complete
        </Button>
        <Button look={Button.look.DELETE} onClick={onDelete}>
          Delete
        </Button>
      </ButtonContainer>
    </TodoItemContainer>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      markAsComplete: markTodoAsComplete,
      deleteTodo: deleteTodoAction,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
