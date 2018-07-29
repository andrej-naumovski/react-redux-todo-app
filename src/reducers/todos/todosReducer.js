// @flow
import _findIndex from 'lodash/findIndex';

import reducerWithActionMappings from '../reducerWithActionMappings';

import {
  ADD_TODO,
  DELETE_ALL,
  MARK_ALL_COMPLETE,
  CHANGE_FILTER_TYPE,
  MARK_TODO_AS_COMPLETE,
  DELETE_TODO,
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

const markTodoAsComplete = (state: TodosState, action: Action<number>) => {
  const { todos } = state;
  const todoId = action.payload;

  const todoToModifyIndex = _findIndex(todos, todo => todo.id === todoId);

  if (todoToModifyIndex === -1) {
    return state;
  }

  const modifiedTodo = {
    ...todos[todoToModifyIndex],
    state: TodoState.COMPLETED,
  };

  return {
    ...state,
    todos: [
      ...todos.slice(0, todoToModifyIndex),
      modifiedTodo,
      ...todos.slice(todoToModifyIndex + 1),
    ],
  };
};

const deleteTodo = (state: TodosState, action: Action<number>) => {
  const { todos } = state;
  const todoId = action.payload;

  const todoToDeleteIndex = _findIndex(todos, todo => todo.id === todoId);

  if (todoToDeleteIndex === -1) {
    return state;
  }

  return {
    ...state,
    todos: [
      ...todos.slice(0, todoToDeleteIndex),
      ...todos.slice(todoToDeleteIndex + 1),
    ],
  };
};

export default reducerWithActionMappings(
  {
    [ADD_TODO]: addTodo,
    [DELETE_ALL]: deleteAllTodos,
    [MARK_ALL_COMPLETE]: markAllAsComplete,
    [CHANGE_FILTER_TYPE]: changeFilterType,
    [MARK_TODO_AS_COMPLETE]: markTodoAsComplete,
    [DELETE_TODO]: deleteTodo,
  },
  initialTodosState
);
