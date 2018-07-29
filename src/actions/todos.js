// @flow
import type { Action } from './types';
import type { TodoFilter } from '../types';

export const ADD_TODO = 'TODO_APP@ADD_TODO';
export const DELETE_ALL = 'TODO_APP@DELETE_ALL';
export const MARK_ALL_COMPLETE = 'TODO_APP@MARK_ALL_COMPLETE';
export const CHANGE_FILTER_TYPE = 'TODO_APP@CHANGE_FILTER_TYPE';

export const addTodo = (todoTitle: string): Action<string> => ({
  type: ADD_TODO,
  payload: todoTitle,
});

export const deleteAllTodos = (): Action<void> => ({
  type: DELETE_ALL,
});

export const markAllTodosComplete = (): Action<void> => ({
  type: MARK_ALL_COMPLETE,
});

export const changeTodoFilterType = (
  filterType: TodoFilter
): Action<TodoFilter> => ({
  type: CHANGE_FILTER_TYPE,
  payload: filterType,
});
