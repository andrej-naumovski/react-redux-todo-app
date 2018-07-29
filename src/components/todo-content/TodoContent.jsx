// @flow
import * as React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoActions from '../todo-actions/TodoActions';
import AddTodo from '../add-todo/AddTodo';

import * as TodoActionCreators from '../../actions/todos';

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  margin: 10px auto;
`;

type Props = {
  addTodo: string => void,
  deleteAllTodos: () => void,
  markAllTodosComplete: () => void,
};

type State = {
  newTodoTitle: string,
  addNewTodoMode: boolean,
};

class TodoContent extends React.Component<Props, State> {
  state = {
    newTodoTitle: '',
    addNewTodoMode: false,
  };

  onAddTodo = () => {
    this.setState({
      addNewTodoMode: true,
    });
  };

  onMarkAllComplete = () => {
    const { markAllTodosComplete } = this.props;

    markAllTodosComplete();
  };

  onDeleteAll = () => {
    const { deleteAllTodos } = this.props;

    deleteAllTodos();
  };

  onNewTodoValueChange = (event: any) => {
    this.setState({
      newTodoTitle: event.target.value,
    });
  };

  onSaveTodo = () => {
    const { addTodo } = this.props;
    const { newTodoTitle } = this.state;

    addTodo(newTodoTitle);
  };

  onCancelNewTodo = () => {
    this.setState({
      newTodoTitle: '',
      addNewTodoMode: false,
    });
  };

  render() {
    const { newTodoTitle, addNewTodoMode } = this.state;
    return (
      <ContentContainer>
        <TodoActions
          onAdd={this.onAddTodo}
          onMarkAllComplete={this.onMarkAllComplete}
          onDeleteAll={this.onDeleteAll}
        />
        {addNewTodoMode && (
          <AddTodo
            value={newTodoTitle}
            onChange={this.onNewTodoValueChange}
            onSave={this.onSaveTodo}
            onClose={this.onCancelNewTodo}
          />
        )}
      </ContentContainer>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...TodoActionCreators,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(TodoContent);
