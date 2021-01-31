import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isLogin } from '../localStorage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to='/admin/login' />)} />
);
export default PrivateRoute;
