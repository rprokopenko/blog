import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Post, Loader, NotFound } from '../components';
import { getPosts } from '../redux/actions/getPosts';

const Home = () => {
  const posts = useSelector(({ getPosts }) => getPosts.posts);
  const isLoaded = useSelector(({ getPosts }) => getPosts.isLoaded);

  const dispatch = useDispatch();

  const postsByLatest = posts.sort((a, b) => a.data.time.seconds - b.data.time.seconds).slice(0, 3);
  const postsByPopular = posts.sort((a, b) => b.data.likes - a.data.likes).slice(0, 4);

  React.useEffect(() => {
    dispatch(getPosts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h3 className='title'>Latest posts</h3>
      {isLoaded ? (
        postsByLatest.length === 0 ? (
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
          postsByPopular.length === 0 ? (
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
