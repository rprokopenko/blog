import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../pages/admin/Login';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to='/admin' />)} />
);
export default PrivateRoute;
