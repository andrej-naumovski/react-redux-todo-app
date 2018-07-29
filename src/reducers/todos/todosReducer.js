// @flow

import reducerWithActionMappings from '../reducerWithActionMappings';

import {
  ADD_TODO,
  DELETE_ALL,
  MARK_ALL_COMPLETE,
  CHANGE_FILTER_TYPE,
} from '../../actions/todos';

import { TodoState, TodoFilterType } from '../../constants/todos';

import type { TodoItem, TodoFilter } from '../../types';
import type { Action } from '../../actions/types';

export type TodosState = {
  todos: Array<TodoItem>,
  filter: TodoFilter,
};

const initialTodosState = {
  todos: [],
  filter: TodoFilterType.ALL,
};

const addTodo = (state: TodosState, action: Action<string>) => {
  const { todos } = state;
  const newTodoId = todos.length ? todos[todos.length - 1].id + 1 : 1;
  const newTodo = {
    id: newTodoId,
    title: action.payload,
    isChecked: false,
    state: TodoState.IN_PROGRESS,
  };

  return {
    ...state,
    todos: [...todos, newTodo],
  };
};

const deleteAllTodos = (state: TodosState) => ({
  ...state,
  todos: [],
});

const markAllAsComplete = (state: TodosState) => ({
  ...state,
  todos: state.todos.map(todo => ({
    ...todo,
    state: TodoState.COMPLETED,
  })),
});

const changeFilterType = (state: TodosState, action: Action<TodoFilter>) => ({
  ...state,
  filter: action.payload,
});

export default reducerWithActionMappings(
  {
    [ADD_TODO]: addTodo,
    [DELETE_ALL]: deleteAllTodos,
    [MARK_ALL_COMPLETE]: markAllAsComplete,
    [CHANGE_FILTER_TYPE]: changeFilterType,
  },
  initialTodosState
);
