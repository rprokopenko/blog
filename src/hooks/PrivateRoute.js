import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = useSelector(({ loginUser }) => {
    console.log(loginUser);
    return loginUser.isLogin;
  });
  return <Route {...rest} render={(props) => (isLogin ? <Component {...props} /> : <Redirect to='/admin/login' />)} />;
};
export default PrivateRoute;
