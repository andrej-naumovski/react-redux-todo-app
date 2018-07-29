import { TodoFilterType } from '../../constants/todos';

const getTodoState = state => state.todos;

export const getTodoFilterType = state => getTodoState(state).filter;

export const getTodosWithAppliedFilter = state => {
  const filter = getTodoFilterType(state);

  const allTodos = getTodoState(state).todos;

  return filter === TodoFilterType.ALL
    ? allTodos
    : allTodos.filter(todo => todo.state === filter);
};
