import React from 'react';

import { Post } from '../components';

const Home = () => {
  return (
    <>
      <h3 className='title'>Latest posts</h3>
      <div className='large-post'>
        <Post isFirst={true} />
      </div>
      <div className='two-post'>
        <Post />
        <Post />
      </div>
      <h3 className='title'>Popular posts</h3>
      <div className='two-post'>
        <Post />
        <Post />
      </div>
      <div className='two-post'>
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Home;
