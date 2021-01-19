import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Post, Loader } from '../components';
import { getPostsByLatest } from '../redux/actions/getPostsByLatest';
import { getPostsByPopular } from '../redux/actions/getPostsByPopular';

const Home = () => {
  const postsByLatest = useSelector(({ getPostsByLatest }) => getPostsByLatest.posts);
  const isLoadedLatest = useSelector(({ getPostsByLatest }) => getPostsByLatest.isLoaded);

  const postsByPopular = useSelector(({ getPostsByPopular }) => getPostsByPopular.posts);
  const isLoadedPopular = useSelector(({ getPostsByPopular }) => getPostsByPopular.isLoaded);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPostsByLatest());
    dispatch(getPostsByPopular());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h3 className='title'>Latest posts</h3>
      {isLoadedLatest ? (
        postsByLatest.length === 0 ? (
          <div className='no-results'>
            <div className='content'>
              <h2 className='title'>No posts</h2>
            </div>
          </div>
        ) : (
          <>
            <div className='large-post'>
              <Post isFirst={true} {...postsByLatest[0].data} />
            </div>
            <div className='two-post'>
              <Post {...postsByLatest[1].data} />
              <Post {...postsByLatest[2].data} />
            </div>
          </>
        )
      ) : (
        <Loader />
      )}

      <h3 className='title'>Popular posts</h3>
      <div className='two-post'>
        {isLoadedPopular ? (
          postsByPopular.length === 0 ? (
            <div className='no-results'>
              <div className='content'>
                <h2 className='title'>No posts</h2>
              </div>
            </div>
          ) : (
            postsByPopular.map((post) => {
              return <Post key={post.id} {...post.data} />;
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
