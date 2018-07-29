import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import WebFont from 'webfontloader';

import createStore from './config/store';

import App from './App';

const store = createStore();

WebFont.load({
  google: {
    families: [
      'Roboto:300,400,700',
      'Roboto Condensed:300,400,700',
      'sans-serif',
    ],
  },
});

/* eslint-disable no-unused-expressions */
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Condensed', sans-serif;
    background-color: #efede6;
  }
`;
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
