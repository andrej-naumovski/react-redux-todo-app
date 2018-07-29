// @flow
import * as React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import TodoActions from '../todo-actions/TodoActions';
import AddTodo from '../add-todo/AddTodo';
import TodoFilter from '../todo-filter/TodoFilter';
import TodoList from '../todo-list/TodoList';

// Constants
import { TodoFilterType } from '../../constants/todos';

// Actions
import * as TodoActionCreators from '../../actions/todos';

// Selectors
import {
  getTodoFilterType,
  getTodosWithAppliedFilter,
} from '../../selectors/todos/todosSelectors';

// Types
import type {
  TodoFilter as TodoFilterFlowtype,
  TodoItem as TodoItemType,
} from '../../types';

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
  changeTodoFilterType: any => void,
  filter: TodoFilterFlowtype,
  todos: Array<TodoItemType>,
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

  onFilterTypeChange = event => {
    const { changeTodoFilterType } = this.props;

    changeTodoFilterType(event.target.value);
  };

  render() {
    const { newTodoTitle, addNewTodoMode } = this.state;
    const { filter, todos } = this.props;
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
        <TodoFilter
          filter={filter}
          filterValues={[...Object.values(TodoFilterType)]}
          onChange={this.onFilterTypeChange}
        />
        <TodoList todos={todos} />
      </ContentContainer>
    );
  }
}

const mapStateToProps = state => ({
  filter: getTodoFilterType(state),
  todos: getTodosWithAppliedFilter(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...TodoActionCreators,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContent);
