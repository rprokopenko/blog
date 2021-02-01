import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicRoute from '../../hooks/PublicRoute';
import PrivateRoute from '../../hooks/PrivateRoute';

import Admin from './Admin';
import Login from './Login';
import { CreatePost } from '../../components';

const Private = () => {
  return (
    <Switch>
      <PublicRoute path='/admin/login' component={Login} exact />
      <PrivateRoute path='/admin' component={Admin} />
    </Switch>
  );
};

export default Private;
