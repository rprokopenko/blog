import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Public from './pages';

import { Admin, Login } from './pages/admin';

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/admin' exact>
          <Admin />
        </Route>

        <Route path='/' component={Public} />
      </Switch>
    </>
  );
};

export default App;
