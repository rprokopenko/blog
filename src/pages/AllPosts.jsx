import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../redux/actions/getPosts';
import { Post, Loader, NoPosts } from '../components';

const AllPosts = () => {
  const posts = useSelector(({ getPosts }) => getPosts.posts);
  const isLoaded = useSelector(({ getPosts }) => getPosts.isLoaded);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h3 className='title'>All Posts</h3>
      <div className='two-post'>
        {isLoaded ? (
          posts.length === 0 ? (
            <NoPosts />
          ) : (
            posts.map((post) => {
              return <Post key={post.id} id={post.id} {...post.data} />;
            })
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default AllPosts;
