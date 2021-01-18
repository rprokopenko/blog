import React from 'react';
import { useParams } from 'react-router-dom';

import { Post } from '../components';

const Main = () => {
  let { categoryName, advice, notes } = useParams();
  return (
    <>
      <h3 className='title'>{categoryName || advice || notes}</h3>

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

export default Main;
