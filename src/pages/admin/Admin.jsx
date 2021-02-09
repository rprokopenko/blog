import React from 'react';
import { Switch } from 'react-router-dom';

import { AdminPanel, CreatePost, Header } from '../../components';
import PrivateRoute from '../../hooks/PrivateRoute';

const Admin = () => {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='content'>
          <Switch>
            <PrivateRoute path='/admin' component={AdminPanel} exact />
            <PrivateRoute path='/admin/new-post' component={CreatePost} exact />
            <PrivateRoute path='/admin/edit-post' component={CreatePost} exact />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Admin;
