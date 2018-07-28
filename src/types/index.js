// @flow
import { TodoState } from '../constants/todos';

export type State = $Keys<typeof TodoState>;

export type TodoItem = {
  title: string,
  state: State,
};

export type TodoItems = Array<TodoItem>;
