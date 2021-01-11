import React from 'react';
import { Route } from 'react-router-dom';

import { Header, Sidebar } from './components';
import { AllPosts, Home } from './pages';

const App = () => {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='content'>
          <div className='columns'>
            <div className='main-column'>
              <Route path='/' component={Home} exact />
              <Route path='/allposts' component={AllPosts} exact />
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
