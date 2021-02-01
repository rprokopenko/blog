import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AdminPanel, CreatePost, Header } from '../../components';

const Admin = () => {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='content'>
          <h3 className='title'>Admin Panel</h3>
          <Switch>
            <Route path='/new-post' component={CreatePost} />
            <Route path='/admin' component={AdminPanel} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Admin;
