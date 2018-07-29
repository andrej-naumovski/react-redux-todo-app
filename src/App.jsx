import React from 'react';

import Button from './components/button/Button';
import Header from './components/header/Header';

const App = () => (
  <React.Fragment>
    <Header />
    <Button type={Button.type.DELETE} disabled>
      HELLO
    </Button>
  </React.Fragment>
);

export default App;
