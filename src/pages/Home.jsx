import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Post, Loader, NotFound } from '../components';
import { getPostsByLatests, getPostsByPopular } from '../redux/actions/getPosts';

const Home = () => {
  const { postsByLatest, postsByPopular } = useSelector(({ getPosts }) => getPosts);
  const isLoaded = useSelector(({ getPosts }) => getPosts.isLoaded);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPostsByLatests());
    dispatch(getPostsByPopular());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h3 className='title'>Latest posts</h3>
      {isLoaded ? (
        postsByLatest.length < 3 ? (
          <NotFound text='No posts :(' />
        ) : (
          <>
            <div className='large-post'>
              <Post isFirst={true} id={postsByLatest[0].id} {...postsByLatest[0].data} />
            </div>
            <div className='two-post'>
              <Post id={postsByLatest[1].id} {...postsByLatest[1].data} />
              <Post id={postsByLatest[2].id} {...postsByLatest[2].data} />
            </div>
          </>
        )
      ) : (
        <Loader />
      )}

      <h3 className='title'>Popular posts</h3>
      <div className='two-post'>
        {isLoaded ? (
          postsByPopular.length < 4 ? (
            <NotFound text='No posts :(' />
          ) : (
            postsByPopular.map((post) => {
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

export default Home;
