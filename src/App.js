import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header, Sidebar, Main } from './components';
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
                <Route path='/web-programming/:categoryName' component={Main} />
                <Route path='/:notes' component={Main} />
                <Route path='/:advice' component={Main} />
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
