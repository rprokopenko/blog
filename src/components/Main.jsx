import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Post } from '../components';
import { getPosts } from '../redux/actions/getPosts';

const Main = () => {
  let { categoryName, advice, notes } = useParams();

  const posts = useSelector((state) => {
    console.log('State: ', state.getPosts.posts);
    return state.getPosts.posts;
  });

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <h3 className='title'>{categoryName || advice || notes}</h3>

      {posts.map((post) => {
        return <Post key={post.id} {...post.data} />;
      })}
      <div className='two-post'>
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Main;
