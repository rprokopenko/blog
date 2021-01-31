import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isLogin } from '../localStorage';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (isLogin() ? <Redirect to='/admin' /> : <Component {...props} />)} />
);
export default PublicRoute;
