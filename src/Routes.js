import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main, SinglePost } from './components';
import { AllPosts, Home } from './pages';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/allposts' component={AllPosts} exact />
      <Route path='/category/:categoryName' component={Main} exact />
      <Route path='/post/:id' component={SinglePost} exact />
    </Switch>
  );
};

export default Routes;
