import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPosts } from '../redux/actions/getPosts';
import { Post, Loader, NoPosts } from '../components';

const Main = () => {
  let { categoryName } = useParams();

  const posts = useSelector(({ getPosts }) => getPosts.posts);
  const isLoaded = useSelector(({ getPosts }) => getPosts.isLoaded);

  const dispatch = useDispatch();

  const filterPosts = posts.filter((post) => post.data.category === categoryName);

  React.useEffect(() => {
    dispatch(getPosts());
  }, [categoryName]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h3 className='title'>{categoryName}</h3>
      <div className='two-post'>
        {isLoaded ? (
          filterPosts.length === 0 ? (
            <NoPosts />
          ) : (
            filterPosts.map((post) => {
              return <Post key={post.id} {...post.data} id={post.id} />;
            })
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Main;
