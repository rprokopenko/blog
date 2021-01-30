import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../pages/admin/Login';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (isLogin() ? <Redirect to='/admin' /> : <Component {...props} />)} />
);
export default PublicRoute;
