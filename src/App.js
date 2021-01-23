import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import { Header, Sidebar } from './components';
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
            <Redirect to='/admin/login' />
          </Switch>

          <div className='columns'>
            <div className='main-column'>
              <Routes />
            </div>
            <div className='column'>{props.location.pathname !== '/admin/login' ? <Sidebar /> : ''}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(App);
