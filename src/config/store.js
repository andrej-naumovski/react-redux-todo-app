import { createStore } from 'redux';

import rootReducer from '../reducers/rootReducer';

/* eslint-disable no-underscore-dangle */
export default () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
/* eslint-enable */
