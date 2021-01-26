import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main, NoPosts, SinglePost } from './components';
import { Admin, AllPosts, Home } from './pages';

import PrivateRoute from './hooks/PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/allposts' component={AllPosts} exact />
      <Route path='/category/:categoryName' component={Main} exact />
      <Route path='/post/:id' component={SinglePost} exact />

      <PrivateRoute path='/admin' component={Admin} exact />

      <Route path='*' component={NoPosts} />
    </Switch>
  );
};

export default Routes;
