import React from 'react';

import Button from './components/button/Button';

const App = () => (
  <React.Fragment>
    <h1>Main application</h1>
    <Button type={Button.type.DELETE} disabled>
      HELLO
    </Button>
  </React.Fragment>
);

export default App;
