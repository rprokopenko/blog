import React from 'react';

import { Post } from '../components';

const Main = (props) => {
  return (
    <>
      <h3 className='title'>{props.match.params.categoryName}</h3>
      {console.log(props.match)}
      <div className='two-post'>
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Main;
