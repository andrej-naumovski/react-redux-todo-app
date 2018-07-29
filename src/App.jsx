// @flow
import * as React from 'react';

import Header from './components/header/Header';
import TodoContent from './components/todo-content/TodoContent';

const App = (): React.Node => (
  <React.Fragment>
    <Header title="Todo App" />
    <TodoContent />
  </React.Fragment>
);

export default App;
