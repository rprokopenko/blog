import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AdminPanel, CreatePost, Header } from '../../components';

const Admin = () => {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='content'>
          <Switch>
            <Route path='/admin' component={AdminPanel} exact />
            <Route path='/admin/new-post' component={CreatePost} exact />
            <Route path='/admin/edit-post' exact>
              <CreatePost isEdit={true} />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Admin;
