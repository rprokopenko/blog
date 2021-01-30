import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Public from './pages';
import Private from './pages/admin';

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/admin' component={Private} />
        <Route path='/' component={Public} />
      </Switch>
    </>
  );
};

export default App;
