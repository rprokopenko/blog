import React from 'react';
import { Switch } from 'react-router-dom';

import PublicRoute from '../../hooks/PublicRoute';
import PrivateRoute from '../../hooks/PrivateRoute';

import Admin from './Admin';
import Login from './Login';

const Private = () => {
  return (
    <Switch>
      <PublicRoute path='/admin/login' component={Login} exact />
      <PrivateRoute path='/admin' component={Admin} exact />
    </Switch>
  );
};

export default Private;
