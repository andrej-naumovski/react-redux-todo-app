import todosReducer from './todosReducer';

import { TodoState, TodoFilterType } from '../../constants/todos';

import {
  ADD_TODO,
  MARK_ALL_COMPLETE,
  DELETE_ALL,
  CHANGE_FILTER_TYPE,
} from '../../actions/todos';

const mockState = {
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
};

describe('TodosReducer', () => {
  it('should add a new todo with action ADD_TODO', () => {
    const expectedTodoTitle = 'New todo title';
    const newState = todosReducer(
      {
        todos: [],
        filter: TodoFilterType.ALL,
      },
      {
        type: ADD_TODO,
        payload: expectedTodoTitle,
      }
    );

    expect(newState.todos).toHaveLength(1);

    const [first] = newState.todos;

    const { id, title, state } = first;

    expect(id).toEqual(1);
    expect(title).toEqual(expectedTodoTitle);
    expect(state).toEqual(TodoState.IN_PROGRESS);
  });

  it('should increment id when adding todo when there are existing todos', () => {
    const expectedId = 3;
    const expectedTitle = 'Test todo 3';

    const newState = todosReducer(mockState, {
      type: ADD_TODO,
      payload: expectedTitle,
    });

    expect(newState.todos).toHaveLength(3);

    const newTodo = newState.todos[newState.todos.length - 1];

    const { id, title } = newTodo;

    expect(id).toEqual(expectedId);
    expect(title).toEqual(expectedTitle);
  });

  it('should set state of all todos to TodoState.COMPLETED with action MARK_ALL_COMPLETE', () => {
    const newState = todosReducer(mockState, {
      type: MARK_ALL_COMPLETE,
    });

    newState.todos.forEach(todo => {
      expect(todo.state).toEqual(TodoState.COMPLETED);
    });
  });

  it('should delete all todos with action DELETE_ALL', () => {
    const newState = todosReducer(mockState, {
      type: DELETE_ALL,
    });

    expect(newState.todos).toHaveLength(0);
  });

  it('should change filter type with action CHANGE_FILTER_TYPE', () => {
    const newState = todosReducer(mockState, {
      type: CHANGE_FILTER_TYPE,
      payload: TodoFilterType.COMPLETED,
    });

    expect(newState.filter).toEqual(TodoFilterType.COMPLETED);
  });
});
