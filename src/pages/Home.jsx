import React from 'react';

import Post from '../components/Post';

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <h3 className='home__title'>Latest posts</h3>
        <div className='columns'>
          <div className='main-column'>
            <div className='large-post'>
              <Post isFirst={true} />
            </div>
            <div className='two-post'>
              <Post />
              <Post />
            </div>
            <h3 className='home__title'>Popular posts</h3>
            <div className='two-post'>
              <Post />
              <Post />
            </div>
            <div className='two-post'>
              <Post />
              <Post />
            </div>
          </div>

          <div className='column'>aside</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
