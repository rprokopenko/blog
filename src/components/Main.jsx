import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Post } from '../components';
import { getPosts } from '../redux/actions/getPosts';

const Main = () => {
  let { categoryName, advice, notes } = useParams();

  const posts = useSelector(({ getPosts }) => getPosts.posts);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <h3 className='title'>{categoryName || advice || notes}</h3>
      <div className='two-post'>
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} {...post.data} />;
          })}
      </div>
    </>
  );
};

export default Main;
