import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { Header, Main, NotFound, Sidebar, SinglePost } from './components';
import { AllPosts, Home } from './pages';
import { Admin, Login } from './pages/admin';

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
              <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/allposts' component={AllPosts} exact />
                <Route path='/category/:categoryName' component={Main} exact />
                <Route path='/post/:id' component={SinglePost} exact />

                <Route path='*' component={NotFound} />
              </Switch>
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
