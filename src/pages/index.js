import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import AllPosts from './AllPosts';
import { NotFound, SinglePost, Main, Sidebar, Header } from '../components/index';

const Public = () => {
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

export default Public;
