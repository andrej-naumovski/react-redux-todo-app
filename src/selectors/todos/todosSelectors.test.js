import { getTodoFilterType, getTodosWithAppliedFilter } from './todosSelectors';

import { TodoState, TodoFilterType } from '../../constants/todos';

const mockState = {
  todos: {
    todos: [
      {
        id: 1,
        title: 'Test todo 1',
        state: TodoState.IN_PROGRESS,
      },
      {
        id: 2,
        title: 'Test todo 2',
        state: TodoState.COMPLETED,
      },
    ],
    filter: TodoFilterType.ALL,
  },
};

const mockStateWithCompletedFilter = {
  todos: {
    todos: [
      {
        id: 1,
        title: 'Test todo 1',
        state: TodoState.IN_PROGRESS,
      },
      {
        id: 2,
        title: 'Test todo 2',
        state: TodoState.COMPLETED,
      },
    ],
    filter: TodoFilterType.COMPLETED,
  },
};

describe('TodosSelectors.getTodoFilterType', () => {
  it('should get the todos filter type', () => {
    const filterType = getTodoFilterType(mockState);

    expect(filterType).toEqual(TodoFilterType.ALL);
  });

  it('should get all todos when filter type is ALL', () => {
    const allTodos = getTodosWithAppliedFilter(mockState);

    expect(allTodos).toEqual(mockState.todos.todos);
  });

  it('should only get todos with state as selected filter when filter type is different from ALL', () => {
    const completedTodos = getTodosWithAppliedFilter(
      mockStateWithCompletedFilter
    );

    expect(completedTodos).toHaveLength(1);

    const [first] = completedTodos;

    expect(first.id).toEqual(2);
  });
});
