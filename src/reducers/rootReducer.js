import { combineReducers } from 'redux';
import todosReducer from './todos/todosReducer';

export default combineReducers({
  todos: todosReducer,
});
