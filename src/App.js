import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { Header, Sidebar } from './components';
import { Login } from './pages';
import Routes from './Routes';

const App = (props) => {
  return (
    <>
      {props.location.pathname !== '/admin/login' ? <Header /> : ''}
      <div className='wrapper'>
        <div className='content'>
          <Route path='/admin/login' component={Login} />

          {props.location.pathname !== '/admin/login' ? (
            <div className='columns'>
              <div className='main-column'>
                <Routes />
              </div>
              <div className='column'>
                <Sidebar />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default withRouter(App);

/*import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import { Header, NoPosts, Sidebar } from './components';
import { Admin, Login } from './pages';
import Routes from './Routes';

const App = (props) => {
  return (
    <>
      {props.location.pathname !== '/admin/login' ? <Header /> : ''}
      <div className='wrapper'>
        <div className='content'>
          <Switch>
            <Route path='/admin/login' component={Login} />
            <Route path='/admin' component={Admin} />
          </Switch>

          <div className='columns'>
            <div className='main-column'>
              <Routes />
            </div>
            <div className='column'>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(App);*/
