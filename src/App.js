import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { Header, Sidebar, Main, SinglePost } from './components';
import { Admin, AllPosts, Home } from './pages';

const App = (props) => {
  return (
    <>
      {props.location.pathname !== '/admin' ? <Header /> : ''}
      <div className='wrapper'>
        <div className='content'>
          <Route path='/admin' component={Admin} />
          <div className='columns'>
            <div className='main-column'>
              <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/allposts' component={AllPosts} exact />
                <Route path='/category/:categoryName' component={Main} exact />
                <Route path='/post/:id' component={SinglePost} exact />
              </Switch>
            </div>
            <div className='column'>{props.location.pathname !== '/admin' ? <Sidebar /> : ''}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(App);
