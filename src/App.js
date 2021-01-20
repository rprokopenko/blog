import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header, Sidebar, Main, SinglePost } from './components';
import { AllPosts, Home } from './pages';

const App = () => {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='content'>
          <div className='columns'>
            <div className='main-column'>
              <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/allposts' component={AllPosts} exact />
                <Route path='/category/:categoryName' component={Main} exact />
                <Route path='/post/:id' component={SinglePost} exact />
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

export default App;
