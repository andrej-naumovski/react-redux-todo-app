// @flow
import { TodoState } from '../constants/todos';

export type State = $Keys<typeof TodoState>;

export type TodoItem = {
  id?: number,
  title: string,
  state: State,
  isChecked: boolean,
};

export type TodoItems = Array<TodoItem>;
