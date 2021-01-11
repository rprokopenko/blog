import React from 'react';

import { Post } from '../components';

const AllPosts = () => {
  return (
    <>
      <h3 className='title'>All Posts</h3>
      <div className='two-post'>
        <Post />
        <Post />
      </div>
      <div className='two-post'>
        <Post />
        <Post />
      </div>
      <div className='two-post'>
        <Post />
        <Post />
      </div>
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

export default AllPosts;
