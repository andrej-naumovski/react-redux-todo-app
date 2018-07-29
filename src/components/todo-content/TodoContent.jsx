// @flow
import * as React from 'react';
import styled from 'styled-components';

import TodoActions from '../todo-actions/TodoActions';
import AddTodo from '../add-todo/AddTodo';

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  margin: 10px auto;
`;

type State = {
  newTodoTitle: string,
  addNewTodoMode: boolean,
};

class TodoContent extends React.Component<*, State> {
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
    console.log('Mark all complete clicked');
  };

  onDeleteAll = () => {
    console.log('Delete all clicked');
  };

  onNewTodoValueChange = (event: any) => {
    this.setState({
      newTodoTitle: event.target.value,
    });
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
            onSave={() => {}}
            onClose={this.onCancelNewTodo}
          />
        )}
      </ContentContainer>
    );
  }
}

export default TodoContent;
